self.addEventListener('fetch', function(evento) {
  // http://localhost/pwasd25/pwa2/index.jpg => unicorn.jpg
  // http://localhost/pwasd25/pwa2/index.jpeg => utp.png
  console.log(evento.request.url);

  if (/\.jpg$/.test(evento.request.url)) {
    evento.respondWith(
      fetch('unicorn.png')
    );
  } else if (/\.png$/.test(evento.request.url)) {
    evento.respondWith(
      fetch('utp.png')
    );
  } else {
    // Por defecto, dejamos pasar la petición normal
    evento.respondWith(fetch(evento.request));
  }
});
