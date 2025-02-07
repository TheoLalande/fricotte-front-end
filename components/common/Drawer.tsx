"use client";

export default function Drawer(props: any) {
  return (
    <>
      <div
        id="drawer-example"
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          props.isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } bg-[#FADAD3] w-64`}
        tabIndex={-1}
        aria-labelledby="drawer-label"
      >
        <button
          type="button"
          onClick={props.toggleDrawer}
          aria-controls="drawer-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <div className="flex flex-col  gap-4 pt-10">
          <a href="/" className="text-black ">
            Accueil
          </a>
          <a href="#" className="text-black ">
            Produits
          </a>
          <a href="#" className="text-black ">
            Mon Panier
          </a>
          <a href="#" className="text-black ">
            Sur mesure
          </a>
          <a href="#" className="text-black ">
            Blog
          </a>
          <a href="#" className="text-black ">
            Plan du site
          </a>
          <a href="#" className="text-black ">
            À propos
          </a>
          <a href="#" className="text-black ">
            Contact
          </a>
          <a href="#" className="text-black ">
            FAQ
          </a>
          <a href="#" className="text-black ">
            Conseils d'entretien
          </a>
          <a href="#" className="text-black ">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </>
  );
}
