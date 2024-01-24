function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

document.querySelectorAll('.bx-icon, .link-site').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.2)';
    });
  
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
    });
  });

document.getElementById('downloadButton').addEventListener('click', function() {
  const fileurl = '';
  const fileName = 'Full-stack developer Daniil Popov resume.pdf'; 

  let link = document.createElement('a');
  link.href = fileurl;
  link.download = fileName;

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
});