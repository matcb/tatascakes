const API_BASE = import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/api` : "/api";

interface ItemPedido {
  tipoProduto: "bolo" | "docinho";
  quantidade: number;
  valorUnitario?: number;
  personalizacao?: Record<string, unknown>;
}

interface ClientePedido {
  nomeCompleto: string;
  contato: string;
  endereco: string;
  formaEntrega: "retirada" | "entrega";
  formaPagamento: "pix" | "dinheiro" | "cartao_credito" | "cartao_debito";
  dataEntrega?: string;
  observacoes?: string;
}

interface CriarPedidoPayload {
  itens: ItemPedido[];
  cliente: ClientePedido;
}

interface PedidoResponse {
  success: boolean;
  message: string;
  data: {
    id: number;
    status: string;
    formaEntrega: string;
    formaPagamento: string;
    dataEntrega: string | null;
    observacoes: string | null;
    valorTotal: number | null;
    criadoEm: string;
    atualizadoEm: string;
    itens: Array<{
      id: number;
      tipoProduto: string;
      quantidade: number;
      valorUnitario: number | null;
      personalizacao: Record<string, unknown> | null;
    }>;
    cliente: {
      id: number;
      nomeCompleto: string;
      contato: string;
      endereco: string;
    };
  };
  whatsappLink: string;
}

class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  const body = await res.json();

  if (!res.ok) {
    const message = body.message || body.errors?.join(", ") || "Erro na requisição";
    throw new ApiError(res.status, message);
  }

  return body;
}

export async function criarPedido(payload: CriarPedidoPayload): Promise<PedidoResponse> {
  return request<PedidoResponse>("/pedidos", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export { ApiError };
export type { CriarPedidoPayload, PedidoResponse, ItemPedido, ClientePedido };
