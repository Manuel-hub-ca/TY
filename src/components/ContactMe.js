"use client";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import SocialMedia from "./SocialMedia";
import { useIntl } from "react-intl";

export default function ContactMe() {
  const emailAddress = "tyelectrique@gmail.com";
  const intl = useIntl()

  return (
    <section id="contact">
          <div className="bg-nuetral-900 text-yellow-400 text-center py-12 shadow-lg">
    <h2 className="text-4xl font-bold uppercase">{intl.formatMessage({id:"contactez"})}</h2>
    <h3>T&Y ÉLECTRIQUE Inc.</h3>
    {/* <p className="mt-2 text-lg">{intl.formatMessage({id:"phone"})}: <a href="tel:5146919445" className="text-yellow-400">(514)-691-9445</a></p> */}
            {/* ✅ Display both phone numbers */}
        {/* ✅ Static phone numbers (Not translated) */}
        <p className="mt-2 text-lg">
          {intl.formatMessage({ id: "phone" })}:
          <a href="tel:5146919445" className="text-yellow-400"> (514)-691-9445</a> 
          <span className="mx-2">|</span> 
          <a href="tel:4387013448" className="text-yellow-400"> (514)-569-8292</a>
        </p>
        <p>RBQ: 5837-2152-01</p>
    <p>{intl.formatMessage({id:"email"})}: <a href="mailto:info@quebexelectrique.com" className="text-yellow-400">{emailAddress}</a></p>

    <p className="mt-3">{intl.formatMessage({id:"address"})}: region de service Montréal, Rive-Nord, Rive-Sud, Montréal-Nord, Québec, H1H 3W3</p>
    <p className="mt-3">{intl.formatMessage({id:"openingHours"})}:</p>
    <p>{intl.formatMessage({id:"monday"})} - {intl.formatMessage({id:"vendredi"})}: 7 AM - 4 PM</p>
    <p className="mt-2">{intl.formatMessage({id:"urgences"})}: <span className="text-yellow-400">24/7</span></p>
  </div>
  <SocialMedia/>
    </section>

  );
}
