import { Button } from "../../components/ui/button";
import { Field, FieldGroup, FieldSet, FieldLabel } from "../../components/ui/field";
import { Input } from "../../components/ui/input";
import logo from "../../assets/logo_tatas_cake.svg";
import { Dropdown } from "../DropdownComponent/DropDownComponent";



export const FormularioBolo = () => {
    return(
        <>
               
            <div className="bg-softpink-bg grid place-items-center min-h-screen p-4">
                
                    <div className="flex flex-col items-center ">
                        <img src={logo} alt="Logo" className="w-75 h-75 " />
                        <p className="font-accent text-red-font -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 text-[1.2rem]">Confeitaria Artesanal - by R.Cakes </p>
                    </div>
                    

                    <FieldSet className="w-full max-w-md mt-15">
                   
                    <FieldGroup className="flex flex-col flex-auto flex-wrap">
                        
                        <Field className="flex-auto flex-col">
                            <FieldLabel  className=" font-logo text-red-font justify-center " htmlFor="sabor">Sabor - Massas </FieldLabel> 
                            <Dropdown
                                options={[
                                    "Chocolate",
                                    "Baunilha",
                                    "Red Velvet",
                                    "Amanteigada",
                                     "Capuccino",
                                    "Red Velvet",
                                    "Massa sabor Banoffee"
                                ]}
                                placeholder="Escolha um Sabor"
                                onSelect={(option) => {
                                    console.log("Selected sabor:", option);
                                }}
                            />

                        </Field>


                        <Field className="flex-auto flex-col">
                            <FieldLabel className=" font-logo text-red-font justify-center" htmlFor="tamanho">Tamanho do Bolo</FieldLabel>
                             <Dropdown
                                options={[
                                    "15cm - 10 fatias",
                                    "20cm - 28 fatias",
                                    "25cm - 42 fatias",
                                    "30cm - 56 fatias",
                                    "35cm - 82 fatias",
                                    "40cm - 100 fatias"
                                ]}
                                placeholder="Escolha o tamanho do bolo"
                                onSelect={(option) => {
                                    console.log("Selected sabor:", option);
                                }}
                            />
                        </Field>

                        
                        <Field className="flex-auto flex-col">
                            <FieldLabel className="font-logo text-red-font justify-center" htmlFor="tema">Topper</FieldLabel>
                             <Dropdown
                                options={[
                                    "Não",
                                    "Sim"
                                ]}
                                placeholder="Escolha o tamanho do bolo"
                                onSelect={(option) => {
                                    console.log("Selected topper:", option);
                                }}
                            />
                        </Field>
                        
                        <Field className="flex-auto flex-col">
                            <FieldLabel className="font-logo text-red-font justify-center" htmlFor="tema">Tema</FieldLabel>
                            <Input className="border-red-border border-2 hover:border-red-200 rounded-[15px]" id="formato_bolo" placeholder="Escolha o tema" autoComplete="off" required />
                        </Field>

                        <Field className="flex-auto flex-col">
                            <FieldLabel className=" font-logo text-red-font justify-center" htmlFor="tamanho">Sabor - Recheio</FieldLabel>
                             <Dropdown
                                options={[
                                    "Brigadeiro ",
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
                                    "sonho de valsa",
                                    "Café",
                                    "Oreo"
                                ]}
                                placeholder="Sabor do Recheio"
                                onSelect={(option) => {
                                    console.log("Selected sabor:", option);
                                }}
                            />
                        </Field>

                        <Field>
                            <FieldLabel className="font-logo text-red-font justify-center" htmlFor="formato">Formato do Bolo </FieldLabel>
                             <Dropdown
                                options={[
                                    "Redondo",
                                    "Quadrado"
                                    
                                ]}
                                placeholder="Escolha o formato "
                                onSelect={(option) => {
                                    console.log("Selected sabor:", option);
                                }}
                            />
                            <Button className=" cursor-pointer font-logo text-red-font hover:border-red-200 border-2 mt-12 rounded-[15px]" type="submit" variant="outline">Submit</Button>
                             
                        </Field>


                    </FieldGroup>
                           
                </FieldSet>
                
            </div>
            
        </>
    )
}