import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Zap, Lock, ArrowRight } from "lucide-react"

export default function Home() {
    const handleNavigation = (path: string) => {
        window.location.href = path
    }

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">

            {/* HERO */}
            <section className="min-h-screen flex items-center justify-center px-6">
                <div className="max-w-7xl w-full text-center relative py-24">

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse -z-10"></div>

                    <Badge className="mb-6">Next-Gen Authentication</Badge>

                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight">
                        Secure Login <br />
                        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Reimagined
            </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
                        Blazing fast, zero-trust authentication system for modern web apps.
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" onClick={() => handleNavigation("/register")}>
                            Get Started <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button size="lg" variant="outline" onClick={() => handleNavigation("/login")}>
                            Live Demo
                        </Button>
                    </div>

                    <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
                        {["99.9% Uptime", "1ms Latency", "10k+ Devs"].map((s, i) => (
                            <div key={i} className="text-center">
                                <div className="text-3xl font-bold text-indigo-500">{s.split(" ")[0]}</div>
                                <div className="text-zinc-500 text-sm">{s.split(" ").slice(1).join(" ")}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <Badge variant="outline" className="mb-4">Features</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4">Why Choose Our Auth?</h2>
                    <p className="text-zinc-400 mt-4 text-lg">Everything you need for secure authentication</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
                        {features.map((f, i) => (
                            <Card key={i} className="bg-zinc-900/60 border-zinc-800 backdrop-blur-xl hover:scale-105 transition-transform duration-300">
                                <CardContent className="p-8">
                                    <div className="w-12 h-12 mb-6 bg-indigo-600/10 rounded-lg flex items-center justify-center mx-auto">
                                        {f.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-24 px-6 bg-zinc-950/40">
                <div className="max-w-7xl mx-auto text-center">
                    <Badge variant="outline" className="mb-4">Process</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4">How It Works</h2>
                    <p className="text-zinc-400 mt-4 text-lg">Get started in three simple steps</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mt-20 max-w-5xl mx-auto">
                        {steps.map((s, i) => (
                            <div key={i} className="relative flex flex-col items-center">
                                {i < 2 && (
                                    <div className="hidden md:block absolute top-12 left-[calc(50%+48px)] w-[calc(100%-96px)] h-0.5 bg-gradient-to-r from-indigo-600 to-transparent"></div>
                                )}
                                <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-4xl font-bold mb-6 shadow-lg shadow-indigo-600/20">
                                    {i + 1}
                                </div>
                                <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
                                <p className="text-zinc-400">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECURITY */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <Badge variant="outline" className="mb-4">Security First</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4">Built for Security</h2>
                    <p className="text-zinc-400 mt-4 text-lg max-w-3xl mx-auto">
                        End-to-end encryption, JWT + OAuth, biometric ready, cloud-native scaling.
                    </p>

                    <div className="flex justify-center gap-4 mt-10 flex-wrap max-w-3xl mx-auto">
                        {["ISO 27001", "GDPR", "SOC-2", "Zero-Trust"].map((c) => (
                            <div key={c} className="px-6 py-3 bg-zinc-900/60 border border-zinc-800 rounded-lg text-sm font-medium">
                                {c}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Start Building Secure Apps Today
                    </h2>
                    <p className="text-white/90 mb-10 text-lg">Join thousands of developers modernizing authentication.</p>
                    <Button size="lg" className="bg-black text-white hover:bg-zinc-900" onClick={() => handleNavigation("/register")}>
                        Create Free Account <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-10 border-t border-zinc-800 text-center text-zinc-500 px-6">
                <div className="max-w-7xl mx-auto">
                    © 2025 AuthX • All rights reserved
                </div>
            </footer>
        </div>
    )
}

const features = [
    { title: "Passwordless Login", desc: "Magic links, OTPs & biometrics.", icon: <Lock className="w-6 h-6 text-indigo-500" /> },
    { title: "Enterprise Ready", desc: "Role-based access & org management.", icon: <Shield className="w-6 h-6 text-indigo-500" /> },
    { title: "Blazing Fast", desc: "Sub-millisecond global latency.", icon: <Zap className="w-6 h-6 text-indigo-500" /> },
]

const steps = [
    { title: "Connect SDK", desc: "Install & configure in minutes." },
    { title: "Customize UI", desc: "Match your brand perfectly." },
    { title: "Go Live", desc: "Deploy & scale instantly." },
]
