import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return <section className="section contact" id="contact">
    <div className="section-label">05 / CONTACT</div><h2>Have a project<br/>in <span>mind?</span></h2>
    <p className="body-copy">I'm open to entry-level frontend opportunities, internships and collaborations. Feel free to reach out.</p>
    <a className="button primary" href="mailto:mollipurushotham6@gmail.com"><Mail size={17}/> mollipurushotham6@gmail.com <ArrowUpRight size={17}/></a>
    <p className="muted small">Replace this placeholder email and social links with your real details.</p>
  </section>;
}