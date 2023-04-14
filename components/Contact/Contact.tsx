import React, { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (
      nameRef.current?.value != null &&
      emailRef.current?.value != null &&
      messageRef.current?.value != null
    ) {
      const templateParams = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      };

      await emailjs
        .send(
          process.env.emailjsService!,
          process.env.emailjsTemplate!,
          templateParams,
          process.env.emailjsSecretKey
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);

            nameRef.current!.value = "";
            emailRef.current!.value = "";
            messageRef.current!.value = "";
            successRef.current!.innerText = "message envoyé avec succès !";
          },
          (err) => {
            console.log("FAILED...", err);
            successRef.current!.innerText = "Une erreur s'est produite. Réessayer plus tard.";
          }
        );
    }
  }

  return (
    <div className="container-fluid py-5" id="contact">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            Contact
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            Contactez Moi
          </h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form text-center">
              <div className="text-primary" ref={successRef}></div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="form-row mb-2">
                  <div className="control-group col-sm-6 mb-2">
                    <input
                      ref={nameRef}
                      type="text"
                      className="form-control p-4"
                      placeholder="Votre Nom"
                      required={true}
                    />
                  </div>
                  <div className="control-group col-sm-6">
                    <input
                      ref={emailRef}
                      type="email"
                      className="form-control p-4"
                      placeholder="Votre Email"
                      required={true}
                    />
                  </div>
                </div>
                <div className="control-group mb-4">
                  <textarea
                    ref={messageRef}
                    className="form-control py-3 px-4"
                    rows={5}
                    placeholder="Message"
                    required={true}
                  ></textarea>
                </div>
                <div>
                  <button className="btn btn-outline-primary" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
