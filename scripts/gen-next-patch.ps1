$ErrorActionPreference = 'Stop'
$root = "node_modules\next"
$files = @(
  @{ Rel='dist/build/collect-build-traces.js';                              New="                        if ((0, _iserror.default)(e) && (e.code === 'EINVAL' || e.code === 'ENOENT' || e.code === 'UNKNOWN' || e.code === 'EISDIR')) {" },
  @{ Rel='dist/build/webpack/plugins/next-trace-entrypoints-plugin.js';     New="                    if ((0, _iserror.default)(e) && (e.code === 'EINVAL' || e.code === 'ENOENT' || e.code === 'UNKNOWN' || e.code === 'EISDIR')) {" },
  @{ Rel='dist/esm/build/collect-build-traces.js';                          New="                        if (isError(e) && (e.code === 'EINVAL' || e.code === 'ENOENT' || e.code === 'UNKNOWN' || e.code === 'EISDIR')) {" },
  @{ Rel='dist/esm/build/webpack/plugins/next-trace-entrypoints-plugin.js'; New="                    if (isError(e) && (e.code === 'EINVAL' || e.code === 'ENOENT' || e.code === 'UNKNOWN' || e.code === 'EISDIR')) {" }
)

$out = New-Object System.Text.StringBuilder
foreach ($f in $files) {
  $rel = $f.Rel
  $abs = Join-Path $root ($rel -replace '/', '\')
  $lines = Get-Content -LiteralPath $abs
  $changeIdx = ($lines | Select-String -Pattern "EINVAL'" -SimpleMatch | Select-Object -First 1).LineNumber - 1
  $ctxBeforeStart = $changeIdx - 4
  $ctxAfterEnd = $changeIdx + 4
  $hunkStart = $ctxBeforeStart + 1

  [void]$out.AppendLine("diff --git a/$rel b/$rel")
  [void]$out.AppendLine("--- a/$rel")
  [void]$out.AppendLine("+++ b/$rel")
  [void]$out.AppendLine("@@ -$hunkStart,9 +$hunkStart,9 @@")
  for ($i = $ctxBeforeStart; $i -lt $changeIdx; $i++) { [void]$out.AppendLine(' ' + $lines[$i]) }
  [void]$out.AppendLine('-' + $lines[$changeIdx])
  [void]$out.AppendLine('+' + $f.New)
  for ($i = $changeIdx + 1; $i -le $ctxAfterEnd; $i++) { [void]$out.AppendLine(' ' + $lines[$i]) }
}

$content = $out.ToString() -replace "`r`n", "`n"
$outPath = (Resolve-Path '.').Path + "\patches\next@15.5.18.patch"
[System.IO.File]::WriteAllText($outPath, $content)
"Wrote: $outPath"
Get-Item $outPath | Select-Object Length
