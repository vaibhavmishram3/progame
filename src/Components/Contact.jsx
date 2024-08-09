import React from "react";

function Contact() {
  return (
    <>
      <div id="contact" className="contact">
        <h1>LET'S PLAY!</h1>
        <p>FEEL FREE TO CONTACT ME FOR FUTURE WORK AND PARTNERSHIPS</p>
        <div className="input">
          <form action="https://formspree.io/f/mnqekeqg" method="POST">
            <div id="inn">
              <div className="inn">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  class="text"
                  placeholder=""
                  name="First Name"
                  maxLength="15"
                  required
                />
              </div>
              <div className="inn">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  class="text"
                  placeholder=""
                  maxLength="15"
                  name="Last Name"
                  required
                />
              </div>
            </div>
            <div id="inn">
              <div className="inn">
                <label htmlFor="">Email *</label>
                <input
                  type="email"
                  class="email"
                  placeholder=""
                  maxLength="30"
                  name="email"
                  required
                />
              </div>
              <div className="inn">
                <label htmlFor="">Subject</label>
                <input
                  type="text"
                  class="text"
                  placeholder=""
                  maxLength="100"
                  name="Subject"
                  required
                />
              </div>
            </div>
            <div className="inn">
              <label htmlFor="">Leave me a message...</label>
              <textarea name="Message" class="text"  placeholder="" maxLength="" ></textarea>
            </div>
            <div id="btn">
              <button type="submit" class="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
