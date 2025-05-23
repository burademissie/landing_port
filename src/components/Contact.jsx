import { Mail , Phone , Linkedin } from "lucide-react";


export const Contact = () => {

    return <section id = "contact" 
    className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have project in mid or want to collaborate ... I am always open
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    {/* <h3 className="text-2xl font-semibold mb-6">Contact Information</h3> */}
                </div>

                <div className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary "/>
                        </div>
                        <div>
                            <h4 className="font-medium">Email</h4>
                            <a href="fromportfolio23@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                fromportfolio23@gmail.com
                            </a>
                        </div>

                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary "/>
                        </div>
                        <div>
                            <h4 className="font-medium">Phone</h4>
                            <a href="tel:+251906817873" className="text-muted-foreground hover:text-primary transition-colors">
                                +251 906817873
                            </a>
                        </div>

                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Linkedin className="h-6 w-6 text-primary "/>
                        </div>
                        <div>
                            <h4 className="font-medium">Linkedin</h4>
                            <a href="https://www.linkedin.com/in/biruk-demissie-46a6ab350/" className="text-muted-foreground hover:text-primary transition-colors">
                                Linkein
                            </a>
                        </div>

                    </div>
                </div>
                <div className="pt-8">
                    <div className="flex space-x-4 justify-center">
                    </div>
                </div>
            </div>
        </div>
    </section>
}