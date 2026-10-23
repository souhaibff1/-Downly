document.getElementById("year").textContent = new Date().getFullYear();
// The download links expect Downly.apk to be in this same folder.
document.querySelectorAll('a[download]').forEach(link => {
  link.addEventListener('click', event => {
    // Leave the browser's native download behavior intact.
  });
});
