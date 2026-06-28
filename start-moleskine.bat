@echo off
setlocal
cd /d "%~dp0"
echo Iniciando Diario Moleskine en http://localhost:8080/moleskine-diary.html
start "" http://localhost:8080/moleskine-diary.html
where py >nul 2>nul
if %errorlevel%==0 (
  py -m http.server 8080 --bind 127.0.0.1
  goto end
)
where python >nul 2>nul
if %errorlevel%==0 (
  python -m http.server 8080 --bind 127.0.0.1
  goto end
)
echo.
echo No se ha encontrado Python. Instala Python o ejecuta la app desde un servidor web/GitHub Pages.
pause
:end
