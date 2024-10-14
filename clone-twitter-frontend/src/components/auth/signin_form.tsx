// Indica que o componente não precisa vir pronto do servidor, mas pode ser renderizado no lado do cliente. Isso é útil para componentes que não são críticos para a renderização inicial da página.
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SigninForm = () => {
  const router = useRouter();
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleEnterButton = () => {
    router.replace("/home");
  };

  return (
    <>
      <Input
        placeholder="Digite seu e-mail"
        value={emailField}
        onChange={(t) => setEmailField(t)}
      />

      <Input
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={(t) => setPasswordField(t)}
        password
      />

      <Button
        label="Entrar"
        onClick={handleEnterButton}
        size={1}
      />
    </>
  );
};