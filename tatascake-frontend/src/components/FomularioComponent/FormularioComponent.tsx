import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Field, FieldGroup, FieldSet, FieldLabel } from "../../components/ui/field";
import { Input } from "../../components/ui/input";
import logo from "../../assets/logo_tatas_cake.svg";
import { Dropdown } from "../DropdownComponent/DropDownComponent";
import { Link } from "react-router-dom";

export const FormularioBolo = () => {
  const [sMassa, setSaborMassa] = useState<string>("");
  const [sRecheio, setSaborRecheio] = useState<string>("");
  const [tamanho, setTamanho] = useState<string>("");
  const [topper, setTopper] = useState<string>("Não"); // valor padrão
  const [formato, setFormato] = useState<string>("");
  const [tema, setTema] = useState<string>("");
  const [erro, setErro] = useState<string>("");

  const handleSubmit = () => {
    setErro(""); // limpa erro anterior

    const verifica = (valor: string, nome: string) =>
      !valor || valor.trim() === "" ? nome : null;

    const faltando = [
      verifica(sMassa, "Sabor da Massa"),
      verifica(sRecheio, "Sabor do Recheio"),
      verifica(tamanho, "Tamanho do Bolo"),
      verifica(formato, "Formato do Bolo"),
      verifica(tema, "Tema do Bolo"),
    ].filter(Boolean) as string[];

    if (faltando.length > 0) {
      alert(`Por favor, preencha os campos: ${faltando.join(", ")}`);
      return;
    }

    // Tudo preenchido → monta o payload
    const payLoad = {
      sMassa,
      sRecheio,
      tamanho,
      topper,
      formato,
      tema: tema.trim(),
    };

    console.log("Pedido recebido! 🎂", payLoad);

    // Mensagem de sucesso
    alert("Pedido enviado com sucesso! Entraremos em contato em breve para confirmar. Obrigada! 💕");

    // Opcional: enviar pro WhatsApp (descomente se quiser)
    /*
    const mensagem = `
*Novo Pedido de Bolo* 🎂

*Sabor da Massa:* ${payLoad.sMassa}
*Sabor do Recheio:* ${payLoad.sRecheio}
*Tamanho:* ${payLoad.tamanho}
*Formato:* ${payLoad.formato}
*Topper:* ${payLoad.topper}
*Tema:* ${payLoad.tema}
    `.trim();

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, "_blank");
    */

    // Limpar formulário (opcional)
    // setSaborMassa(""); etc...
  };

  return (
    <>
      <div className="bg-softpink-bg grid place-items-center min-h-screen p-4">
        <div className="flex flex-col items-center mb-8">
          <Link to="/">
            <img src={logo} alt="Logo Tatas Cake" className="w-75 h-75" />
            <p className="font-accent text-red-font -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 text-[1.2rem] text-center">
              Confeitaria Artesanal - by R.Cakes
            </p>
          </Link>
        </div>

        <FieldSet className="w-full max-w-md">
          {/* Mensagem de erro */}
          {erro && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center font-medium">
              {erro}
            </div>
          )}

          <FieldGroup className="space-y-6">
            <Field>
              <FieldLabel className="font-logo text-red-font text-center">
                Sabor da Massa
              </FieldLabel>
              <Dropdown
                options={[
                  "Chocolate",
                  "Baunilha",
                  "Red Velvet",
                  "Amanteigada",
                  "Capuccino",
                  "Massa sabor Banoffee",
                ]}
                placeholder="Escolha o sabor da massa"
                onSelect={setSaborMassa}
              />
            </Field>

            <Field>
              <FieldLabel className="font-logo text-red-font text-center">
                Sabor do Recheio
              </FieldLabel>
              <Dropdown
                options={[
                  "Brigadeiro",
                  "Brigadeiro branco",
                  "Amendoim",
                  "Beijinho",
                  "Doce de leite",
                  "Maracujá",
                  "Sensação",
                  "Abacaxi",
                  "Ninho",
                  "4 leites",
                  "Café",
                  "Oreo",
                  "Ninho Trufado",
                  "Sonho de valsa",
                ]}
                placeholder="Escolha o recheio"
                onSelect={setSaborRecheio}
              />
            </Field>

            <Field>
              <FieldLabel className="font-logo text-red-font text-center">
                Tamanho do Bolo
              </FieldLabel>
              <Dropdown
                options={[
                  "15cm - 10 fatias",
                  "20cm - 28 fatias",
                  "25cm - 42 fatias",
                  "30cm - 56 fatias",
                  "35cm - 82 fatias",
                  "40cm - 100 fatias",
                ]}
                placeholder="Escolha o tamanho"
                onSelect={setTamanho}
              />
            </Field>

            <Field>
              <FieldLabel className="font-logo text-red-font text-center">
                Formato do Bolo
              </FieldLabel>
              <Dropdown
                options={["Redondo", "Quadrado"]}
                placeholder="Escolha o formato"
                onSelect={setFormato}
              />
            </Field>

            <Field>
              <FieldLabel className="font-logo text-red-font text-center">
                Deseja topper personalizado?
              </FieldLabel>
              <Dropdown
                options={["Não", "Sim"]}
                placeholder="Selecione"
                onSelect={setTopper}
              />
            </Field>

            <Field>
              <FieldLabel className="font-logo text-red-font text-center">
                Tema do Bolo
              </FieldLabel>
              <Input
                className="border-red-border border-2 hover:border-red-200 rounded-[15px]"
                placeholder="Ex: Frozen, Minecraft, floral, número 30..."
                value={tema}
                onChange={(e) => setTema(e.target.value)}
              />
            </Field>

            <Button
              onClick={handleSubmit}
              className="w-full font-logo text-red-font hover:bg-red-50 border-2 py-6 text-lg rounded-[15px]"
              variant="outline"
            >
              Enviar Pedido
            </Button>
          </FieldGroup>
        </FieldSet>
      </div>
    </>
  );
};