import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "../ui/button";
import Image from "next/image";

export default function CardComponent() {
    return (
        <Card className="lg:min-w-[420px]">
            <CardHeader>
                <CardTitle>Plano Pro Premium VIP</CardTitle>
                <CardDescription>Tudo que você precisa para seus estudos</CardDescription>
            </CardHeader>
            <CardContent>

                <div className="flex flex-col gap-2.5">
                    <div className="content-header flex justify-start items-center">
                        <h3 className="text-black text-4xl font-semibold"> R$29 </h3>
                        <h4 className="text-[#6B7280] text-xl"> /mês </h4>
                    </div>

                    <div className="content-main ">
                        <ul className="flex gap-2.5 flex-col">
                            <li className="flex justify-start items-center gap-2.5">
                                <i> <Image src={'check.svg'} alt="check-icone" width={14} height={10} /> </i>
                                <span className="text-sm text-[#6B7280]">
                                    1 ebook por mês
                                </span>
                            </li>
                            <li className="flex justify-start items-center gap-2.5">
                                <i> <Image src={'check.svg'} alt="check-icone" width={14} height={10} /> </i>
                                <span className="text-sm text-[#6B7280]">
                                    Curadoria especial
                                </span>
                            </li>
                            <li className="flex justify-start items-center gap-2.5">
                                <i> <Image src={'check.svg'} alt="check-icone" width={14} height={10} /> </i>
                                <span className="text-sm text-[#6B7280]">
                                    Acesso ilimitado
                                </span>
                            </li>
                            <li className="flex justify-start items-center gap-2.5">
                                <i> <Image src={'check.svg'} alt="check-icone" width={14} height={10} /> </i>
                                <span className="text-sm text-[#6B7280]">
                                    Cancele a qualquer momento
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                
            </CardContent>
            <CardFooter>
                <Button className="w-full"> Assine Agora </Button>
            </CardFooter>
        </Card>
    );
}