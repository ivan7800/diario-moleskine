$ErrorActionPreference = "Stop"
$Port = 8080
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $Root
$pythonCmd = $null
foreach ($cmd in @("py", "python", "python3")) { try { $null = & $cmd --version 2>$null; if ($LASTEXITCODE -eq 0) { $pythonCmd = $cmd; break } } catch {} }
if (-not $pythonCmd) { Write-Host "No se ha encontrado Python." -ForegroundColor Red; pause; exit 1 }
$url = "http://localhost:$Port/moleskine-diary.html"
Start-Process $url
if ($pythonCmd -eq "py") { & py -m http.server $Port --bind 127.0.0.1 } else { & $pythonCmd -m http.server $Port --bind 127.0.0.1 }
