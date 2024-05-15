"use client";
import React, { useState } from "react";
import CallForm from "@/components/callForm/CallForm";
import SuccessMessage from "@/components/successMessage/SuccessMessage";
import { Metadata } from "next";

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
