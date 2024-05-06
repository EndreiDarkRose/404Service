"use client";
import React, { useState } from "react";
import CallForm from "../components/CallForm/CallForm";
import SuccessMessage from "../components/SuccessMessage/SuccessMessage";

export default function Call() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div>
      {!formSubmitted ? (
        <CallForm setFormSubmitted={setFormSubmitted} />
      ) : (
        <SuccessMessage />
      )}
    </div>
  );
}
