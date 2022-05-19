window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showBackToTopButtonOnScroll()
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 200) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

ScrollReveal({
  origin:'bottom',
  distance: '30px',
  duration: 700,
}).reveal(`
#home,
#about,
#about .about_content #right_side,
#about .about_content #right_side p,
#about .about_content #left_side,
#about .about_content #left_side h3,
#about .about_content #left_side .social_media,
#skills,
#skills #type_skills,
#skills #type_skills .skill,
#portfolio,
#portfolio #projects,
#portfolio #projects .project,
#contact,
#contact h2,
#contact p,
#contact .info_contact,
#contact .info_contact .type_contact`)

// Mobile navigation desaparecendo quando clicado.

document.querySelectorAll("ul#menu_content li a").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector("input[type=checkbox").checked = false;
  });
});

// Restauração da Página para o Início ao recarregar.
history.scrollRestoration = 'manual'

'beforeunload',
  function () {
    window.scrollTop(0)
  }


