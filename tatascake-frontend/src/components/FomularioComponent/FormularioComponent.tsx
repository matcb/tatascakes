import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Field, FieldGroup, FieldSet, FieldLabel } from "../../components/ui/field";
import { Input } from "../../components/ui/input";
import logo from "../../assets/logo_tatas_cake.svg";
import { Dropdown } from "../DropdownComponent/DropDownComponent";
import { Link } from "react-router-dom";
import { criarPedido, ApiError } from "../../services/api";

export const FormularioBolo = () => {
  const [sMassa, setSaborMassa] = useState("");
  const [sRecheio, setSaborRecheio] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [topper, setTopper] = useState("Não");
  const [formato, setFormato] = useState("");
  const [tema, setTema] = useState("");

  const [nomeCompleto, setNomeCompleto] = useState("");
  const [contato, setContato] = useState("");
  const [endereco, setEndereco] = useState("");
  const [formaEntrega, setFormaEntrega] = useState("");
  const [formaPagamento, setFormaPagamento] = useState("");
  const [dataEntrega, setDataEntrega] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async () => {
    setErro("");

    const verifica = (valor: string, nome: string) =>
      !valor || valor.trim() === "" ? nome : null;

    const faltando = [
      verifica(sMassa, "Sabor da Massa"),
      verifica(sRecheio, "Sabor do Recheio"),
      verifica(tamanho, "Tamanho do Bolo"),
      verifica(formato, "Formato do Bolo"),
      verifica(tema, "Tema do Bolo"),
      verifica(nomeCompleto, "Nome Completo"),
      verifica(contato, "Contato (WhatsApp)"),
      verifica(endereco, "Endereço"),
      verifica(formaEntrega, "Forma de Entrega"),
      verifica(formaPagamento, "Forma de Pagamento"),
      verifica(dataEntrega, "Data de Entrega"),
    ].filter(Boolean) as string[];

    if (faltando.length > 0) {
      setErro(`Por favor, preencha os campos: ${faltando.join(", ")}`);
      return;
    }

    setEnviando(true);

    try {
      const formaEntregaMap: Record<string, string> = {
        "Retirada": "retirada",
        "Entrega": "entrega",
      };
      const formaPagamentoMap: Record<string, string> = {
        "Pix": "pix",
        "Dinheiro": "dinheiro",
        "Cartão de Crédito": "cartao_credito",
        "Cartão de Débito": "cartao_debito",
      };

      const response = await criarPedido({
        itens: [
          {
            tipoProduto: "bolo",
            quantidade: 1,
            personalizacao: {
              saborMassa: sMassa,
              saborRecheio: sRecheio,
              tamanho,
              forma: formato,
              topper,
              tema: tema.trim(),
            },
          },
        ],
        cliente: {
          nomeCompleto: nomeCompleto.trim(),
          contato: contato.replace(/\D/g, ""),
          endereco: endereco.trim(),
          formaEntrega: (formaEntregaMap[formaEntrega] || formaEntrega) as "retirada" | "entrega",
          formaPagamento: (formaPagamentoMap[formaPagamento] || formaPagamento) as "pix" | "dinheiro" | "cartao_credito" | "cartao_debito",
          dataEntrega,
          observacoes: observacoes.trim() || undefined,
        },
      });

      window.open(response.whatsappLink, "_blank");

      setSaborMassa("");
      setSaborRecheio("");
      setTamanho("");
      setTopper("Não");
      setFormato("");
      setTema("");
      setNomeCompleto("");
      setContato("");
      setEndereco("");
      setFormaEntrega("");
      setFormaPagamento("");
      setDataEntrega("");
      setObservacoes("");

      alert("Pedido enviado com sucesso! Abrindo WhatsApp...");
    } catch (err) {
      if (err instanceof ApiError) {
        setErro(err.message);
      } else {
        setErro("Erro ao enviar pedido. Tente novamente.");
      }
    } finally {
      setEnviando(false);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-softpink-bg via-softpink-bg/60 to-red-font/10 grid place-items-center w-full min-h-screen p-4">
        
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="block mx-auto">
            <img src={logo} alt="Logo Tatas Cake" className="w-32 h-32 sm:w-40 sm:h-40 md:w-50 md:h-50 lg:w-75 lg:h-75 object-contain mx-auto" />
            <p className="font-accent text-red-font -mt-4 sm:-mt-6 md:-mt-10 lg:-mt-16 text-[1.2rem] sm:text-[1.4rem] text-center">
              Confeitaria Artesanal - by R.Cakes
            </p>
          </Link>
        </div>

        <FieldSet className="w-full max-w-md mx-auto">
          {erro && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center font-medium max-h-32 overflow-y-auto">
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

            <div className="border-t-2 border-red-border/30 pt-6 mt-6">
              <p className="font-logo text-red-font text-center text-lg mb-4">
                Dados do Pedido
              </p>
            </div>

            <Field>
              <FieldLabel className="font-logo text-red-font text-center">
                Nome Completo
              </FieldLabel>
              <Input
                className="border-red-border border-2 hover:border-red-200 rounded-[15px]"
                placeholder="Seu nome completo"
                value={nomeCompleto}
                onChange={(e) => setNomeCompleto(e.target.value)}
              />
            </Field>

            <Field>
              <FieldLabel className="font-logo text-red-font text-center">
                Contato (WhatsApp)
              </FieldLabel>
              <Input
                className="border-red-border border-2 hover:border-red-200 rounded-[15px]"
                placeholder="Ex: 11999999999"
                value={contato}
                onChange={(e) => setContato(e.target.value)}
              />
            </Field>

            <Field>
              <FieldLabel className="font-logo text-red-font text-center">
                Endereço
              </FieldLabel>
              <Input
                className="border-red-border border-2 hover:border-red-200 rounded-[15px]"
                placeholder="Rua, número, bairro..."
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </Field>

            <Field>
              <FieldLabel className="font-logo text-red-font text-center">
                Forma de Entrega
              </FieldLabel>
              <Dropdown
                options={["Retirada", "Entrega"]}
                placeholder="Escolha a forma de entrega"
                onSelect={setFormaEntrega}
              />
            </Field>

            <Field>
              <FieldLabel className="font-logo text-red-font text-center">
                Forma de Pagamento
              </FieldLabel>
              <Dropdown
                options={["Pix", "Dinheiro", "Cartão de Crédito", "Cartão de Débito"]}
                placeholder="Escolha a forma de pagamento"
                onSelect={setFormaPagamento}
              />
            </Field>

            <Field>
              <FieldLabel className="font-logo text-red-font text-center">
                Data de Entrega
              </FieldLabel>
              <Input
                type="date"
                className="border-red-border border-2 hover:border-red-200 rounded-[15px]"
                value={dataEntrega}
                onChange={(e) => setDataEntrega(e.target.value)}
              />
            </Field>

            <Field>
              <FieldLabel className="font-logo text-red-font text-center">
                Observações (opcional)
              </FieldLabel>
              <Input
                className="border-red-border border-2 hover:border-red-200 rounded-[15px]"
                placeholder="Alguma observação adicional..."
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
              />
            </Field>

            <Button
              onClick={handleSubmit}
              disabled={enviando}
              className="w-full font-logo text-red-font hover:bg-red-50 border-2 py-6 text-lg rounded-[15px]"
              variant="outline"
            >
              {enviando ? "Enviando..." : "Enviar Pedido"}
            </Button>
          </FieldGroup>
        </FieldSet>
      </div>
    </>
  );
};
