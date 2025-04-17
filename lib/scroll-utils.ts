export function scrollToSection(id: string) {
  const element = document.getElementById(id)
  if (element) {
    // Get the header height to offset the scroll position
    const header = document.querySelector("header")
    const headerHeight = header ? header.getBoundingClientRect().height : 0

    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}
