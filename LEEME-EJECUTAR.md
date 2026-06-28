# Diario · Moleskine v2.2 corregido

Corrección crítica incluida:

- Se corrige `renderEntryList()`: usaba `const filtered` y luego reasignaba `filtered`, provocando un error JavaScript que impedía que la entrada apareciera y que los contadores se actualizaran.
- La entrada nueva se guarda inmediatamente en IndexedDB.
- El botón mostrará aviso: `Entrada creada y guardada`.
- El Service Worker pasa a caché v6 para evitar versión antigua.

## Uso

1. Descomprime el ZIP.
2. Ejecuta `start-moleskine.bat`.
3. Si el navegador muestra versión antigua: pulsa `Ctrl+F5` o borra Service Worker/cache en DevTools > Application.
