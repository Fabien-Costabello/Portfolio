import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Bounce, ToastContainer, toast } from "react-toastify";

export default function ContactSection() {
  const form = useRef();
  const notify = () => toast("Message envoyé !",{ style: {
    background: '#059669', // Tailwind green-600
    color: 'white',
    fontWeight: 'bold'
  }})
    
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          notify();
          console.log("test");

          form.current.reset();
        },
        (error) => {
          alert("Erreur : " + error.text);
        }
      );
  };

  return (
    <section id="contact" className=" pb-15 ">
      <div>
        <h2 className="text-center font-bold text-2xl pt-5 text-white">
          CONTACT
        </h2>
        <div className="mx-auto mt-2 h-1 w-[80%] rounded bg-gradient-to-r from-transparent via-theme to-transparent"></div>
        <p className="pt-4 pb-6 w-[80%] text-center m-auto text-white  ">
          N'hésitez pas à me contacter via le formulaire ci-dessous ou sur LinkedIn/mail directement pour toute demande.
        </p>
      </div>

      <form
        data-aos="fade-up"
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col  md:w-[40%] bg-gray-900 m-auto p-6 space-y-6 shadow-lg rounded-xl border border-theme"
      >
        <div className="flex flex-col gap-0.5 text-black">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Entrez votre email"
            className="rounded-lg  bg-gray-100 border border-gray-300 p-2.5 text-black"
          />
        </div>

        <div className="flex flex-col gap-0.5 text-black">
          <label htmlFor="name" className="text-white">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Entrez votre nom"
            className="rounded-lg bg-gray-100 border text-black border-gray-300 p-2.5"
          />
        </div>

        <div className="flex flex-col gap-0.5 text-black">
          <label htmlFor="content" className="text-white">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Entrez votre message"
            className="rounded-lg bg-gray-100 border text-black border-gray-300 p-2.5"
            rows="5"
            cols="33"
          />
        </div>

        <button
          type="submit"
          className="bg-theme hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full m-auto"
        >
          Envoyer
        </button>
      </form>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>
    </section>
  );
}
