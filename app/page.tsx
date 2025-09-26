"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Timer } from "@/components/timer"
import { TrackingScripts } from "@/components/tracking-scripts"
import { ExitIntentModal } from "@/components/exit-intent-modal"
import { AlertTriangle, Gift, Zap } from "lucide-react"

export default function DownsellPage() {
  const [spotsRemaining, setSpotsRemaining] = useState(47)
  const [showExitIntent, setShowExitIntent] = useState(false)

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (spotsRemaining > 3 && Math.random() < 0.15) {
          setSpotsRemaining((prev) => prev - 1)
        }
      },
      Math.random() * 45000 + 45000,
    )

    return () => clearInterval(interval)
  }, [spotsRemaining])

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showExitIntent) {
        setShowExitIntent(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [showExitIntent])

  const handleCTAClick = () => {
    if (typeof window !== "undefined") {
      // Facebook Pixel
      if ((window as any).fbq) {
        ;(window as any).fbq("track", "Purchase", {
          value: 14,
          currency: "USD",
          content_name: "Sistema de Blindaje Total - Downsell",
        })
      }

      // GA4
      if ((window as any).gtag) {
        ;(window as any).gtag("event", "purchase", {
          transaction_id: Date.now().toString(),
          value: 14,
          currency: "USD",
          items: [
            {
              item_id: "blindaje-total-downsell",
              item_name: "Sistema de Blindaje Total - Última Oportunidad",
              category: "Downsell",
              quantity: 1,
              price: 14,
            },
          ],
        })
      }
    }

    window.open("https://pay.hotmart.com/N100448107A?off=fh6ck4c7", "_blank")
  }

  return (
    <>
      <TrackingScripts />
      <ExitIntentModal isOpen={showExitIntent} onClose={() => setShowExitIntent(false)} onCTA={handleCTAClick} />

      <div className="min-h-screen bg-background">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 gradient-danger opacity-90" />
          <div className="relative z-10 container mx-auto px-4 py-12 text-center">
            <div className="animate-slide-up">
              <div className="text-6xl mb-6 animate-pulse-glow">⚠️</div>
              <h1 className="text-3xl md:text-5xl font-black text-white mb-6 text-glow">¡ESPERA! ÚLTIMA OPORTUNIDAD</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 font-semibold">
                Antes de que pierdas para siempre el Sistema de Blindaje...
              </p>

              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                <Badge className="glass text-lg px-6 py-3 text-white border-white/30">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  67% vuelve a perder a su ex
                </Badge>
                <Badge className="glass text-lg px-6 py-3 text-white border-white/30">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  No protejas tu inversión de $36
                </Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-16">
          <div className="absolute inset-0 gradient-warning opacity-95" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 text-glow animate-pulse-glow">
              🚨 ESTA ES TU ÚLTIMA OPORTUNIDAD...
            </h2>

            <Card className="glass-lg max-w-4xl mx-auto p-8 border-yellow-400/50">
              <h3 className="text-2xl md:text-3xl font-black text-yellow-400 mb-6">REALIDAD BRUTAL:</h3>
              <p className="text-lg md:text-xl text-white mb-6">Estás a punto de cometer el mismo error que el 67%:</p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="glass p-6 rounded-xl border-red-400/30">
                  <div className="text-4xl font-black text-red-400 mb-2">67%</div>
                  <div className="text-white font-semibold">RECONQUISTA PERO LA VUELVE A PERDER</div>
                </div>
                <div className="glass p-6 rounded-xl border-red-400/30">
                  <div className="text-4xl font-black text-red-400 mb-2">$36</div>
                  <div className="text-white font-semibold">INVERSIÓN PERDIDA PARA SIEMPRE</div>
                </div>
                <div className="glass p-6 rounded-xl border-green-400/30">
                  <div className="text-4xl font-black text-green-400 mb-2">33%</div>
                  <div className="text-white font-semibold">USA SISTEMA DE BLINDAJE</div>
                </div>
              </div>
              <p className="text-xl md:text-2xl font-bold text-white">
                <strong>¿VAS A SER PARTE DEL 67% QUE PIERDE TODO?</strong>
                <br />O del 33% que blinda su relación para siempre...
              </p>
            </Card>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 space-y-16">
          <Card className="glass-lg p-8 border-l-8 border-red-500 animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-12 h-12 text-red-500 animate-pulse" />
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-red-600 mb-4">💔 NO COMETAS EL ERROR DE $36</h3>
                <p className="text-lg mb-4">
                  <strong>Ya invertiste $36 en reconquistarla.</strong>
                </p>
                <p className="text-lg mb-6">
                  <strong>¿Vas a perder esa inversión por no protegerla?</strong>
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <Badge variant="destructive" className="text-base px-4 py-2">
                    Sin blindaje: 67% la pierde
                  </Badge>
                  <Badge variant="destructive" className="text-base px-4 py-2">
                    Inversión de $36 perdida
                  </Badge>
                  <Badge className="gradient-success text-base px-4 py-2 text-white">Con blindaje: 97% éxito</Badge>
                </div>

                <p className="text-xl font-bold text-red-600">
                  Esta es tu ÚLTIMA oportunidad de proteger tu inversión.
                </p>
              </div>
            </div>
          </Card>

          {/* Main Title */}
          <div className="text-center py-12">
            <h2 className="text-4xl md:text-6xl font-black text-gradient mb-4">SISTEMA DE BLINDAJE TOTAL</h2>
            <p className="text-2xl md:text-3xl font-bold text-primary">ÚLTIMA OPORTUNIDAD - PRECIO ESPECIAL</p>
          </div>

          {/* Brutal Comparison */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="glass-lg p-8 border-red-500/50 animate-slide-up">
              <div className="text-center mb-6">
                <Badge variant="destructive" className="text-lg px-6 py-2 mb-4">
                  ❌ SIN SISTEMA DE BLINDAJE
                </Badge>
              </div>
              <ul className="space-y-4">
                {[
                  "Ella vuelve, pero gradualmente pierde interés",
                  "Aparecen otros hombres en su radar",
                  "Las peleas se vuelven más frecuentes",
                  'Se acostumbra a ti (pierde la "magia")',
                  "67% probabilidad de perderla nuevamente",
                  "Vuelves al punto de partida (o peor)",
                  "Años de sufrimiento y intentos fallidos",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="text-red-500 text-xl">💔</div>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="glass-lg p-8 border-green-500/50 animate-slide-up glow">
              <div className="text-center mb-6">
                <Badge className="gradient-success text-lg px-6 py-2 mb-4 text-white">✅ CON SISTEMA DE BLINDAJE</Badge>
              </div>
              <ul className="space-y-4">
                {[
                  "Su obsesión por ti CRECE con el tiempo",
                  "Inmunidad total contra otros hombres",
                  "Relación cada vez más sólida y apasionada",
                  "Nunca se aburre de ti (renovación constante)",
                  "97% probabilidad de relación permanente",
                  'Ella te ve como "el hombre de su vida"',
                  "Relación blindada para toda la vida",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="text-green-500 text-xl">🛡️</div>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Testimonial */}
          <Card className="glass-lg p-8 border-blue-500/50 animate-slide-up">
            <div className="flex items-start gap-4">
              <div className="text-4xl animate-float">🛡️</div>
              <div>
                <h4 className="text-xl md:text-2xl font-black text-blue-600 mb-4">
                  "La reconquisté en 8 días, pero casi la pierdo otra vez..."
                </h4>
                <p className="text-base md:text-lg italic mb-6 leading-relaxed">
                  "Usé el Plan A y el Protocolo de Dominancia. Funcionó perfectamente - ella volvió rogando. Pero
                  después de 3 meses, empezó a distanciarse otra vez. Un compañero de trabajo empezó a coquetearle y vi
                  que ella respondía. Compré el Sistema de Blindaje y fue como activar un escudo invisible. En 2
                  semanas, ella misma me contó que había rechazado al tipo y que se dio cuenta de que yo era el único
                  hombre que realmente la entendía. Ahora llevamos 2 años juntos y ella me dice que soy el amor de su
                  vida. Sin el Sistema de Blindaje, la habría perdido para siempre."
                </p>
                <p className="font-bold text-blue-600">- Miguel R., relación blindada hace 2 años</p>
              </div>
            </div>
          </Card>

          {/* Product Reveal */}
          <Card className="glass-lg p-8 text-center border-purple-500/50 glow animate-slide-up">
            <div className="text-6xl mb-6 animate-float">🛡️</div>
            <h2 className="text-3xl md:text-4xl font-black text-gradient mb-4">SISTEMA DE BLINDAJE TOTAL</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Protocolo Anti-Pérdida - El método "secreto" que solo 3% de nuestros clientes conoce
            </p>

            {/* Modules */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  number: 1,
                  title: "PROTOCOLO DE MANTENIMIENTO DE OBSESIÓN",
                  features: [
                    "Las 12 técnicas para mantener su adicción emocional activa",
                    'Cómo evitar que se "acostumbre" a ti (el error fatal del 67%)',
                    'Sistema de "dosis controladas" de atención',
                    "Técnicas de renovación emocional constante",
                    'Protocolo de "hambre emocional" controlada',
                  ],
                },
                {
                  number: 2,
                  title: "ESCUDO ANTI-TERCEROS",
                  features: [
                    "Cómo hacerla inmune a otros hombres",
                    'Protocolo de "vacunación emocional"',
                    "Las 7 frases que la blindan contra tentaciones",
                    "Sistema de comparación automática (tú siempre ganas)",
                    'Técnicas de "marca emocional" permanente',
                  ],
                },
                {
                  number: 3,
                  title: "ESCALADA DE COMPROMISO",
                  features: [
                    "Cómo hacer que ella invierta cada vez más en la relación",
                    'Técnicas de "compromiso progresivo"',
                    'Sistema de "anclas emocionales" permanentes',
                    'Protocolo de "costo hundido" emocional',
                    "Estrategias de vinculación profunda",
                  ],
                },
                {
                  number: 4,
                  title: "PROTOCOLO DE CRISIS",
                  features: [
                    "Qué hacer si aparecen señales de distanciamiento",
                    "Plan de emergencia para peleas graves",
                    'Técnicas de "reseteo emocional"',
                    "Sistema de recuperación rápida de interés",
                    'Protocolo de "segunda luna de miel"',
                  ],
                },
              ].map((module) => (
                <Card
                  key={module.number}
                  className="glass p-6 text-left relative border-primary/30 hover:glow transition-all duration-300"
                >
                  <Badge className="gradient-primary absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-black">
                    {module.number}
                  </Badge>
                  <h3 className="text-lg font-black text-primary mb-4">{module.title}</h3>
                  <ul className="space-y-2">
                    {module.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            {/* Bonus */}
            <Card className="glass p-6 border-yellow-500/50 mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Gift className="w-8 h-8 text-yellow-500 animate-pulse" />
                <h4 className="text-xl font-black text-yellow-600">BONO EXCLUSIVO INCLUIDO</h4>
              </div>
              <p className="text-base">
                <strong>"Manual del Hombre Irresistible"</strong> - Cómo evolucionar constantemente para mantener su
                interés. Sistema de mejora personal que la mantiene fascinada + Protocolo de "sorpresa controlada" que
                renueva su obsesión cada mes.
                <span className="text-yellow-600 font-bold"> (Valor: $67 - HOY GRATIS)</span>
              </p>
            </Card>
          </Card>

          <Card className="glass-lg p-8 text-center border-green-500/50 glow animate-slide-up">
            <div className="space-y-4 mb-8">
              {[
                { item: "Módulo 1: Mantenimiento de Obsesión", value: "$67" },
                { item: "Módulo 2: Escudo Anti-Terceros", value: "$67" },
                { item: "Módulo 3: Escalada de Compromiso", value: "$67" },
                { item: "Módulo 4: Protocolo de Crisis", value: "$67" },
                { item: "Bono: Manual del Hombre Irresistible", value: "$67" },
              ].map((line, index) => (
                <div key={index} className="flex justify-between items-center text-lg">
                  <span>{line.item}</span>
                  <span className="font-bold text-green-600">{line.value}</span>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-green-500 pt-6">
              <div className="text-2xl line-through text-muted-foreground mb-2">Valor total: $335</div>
              <div className="text-xl line-through text-muted-foreground mb-2">Precio normal: $19</div>
              <div className="text-5xl font-black text-green-600 mb-4 text-glow">ÚLTIMA OPORTUNIDAD: $14</div>
              <div className="text-lg text-muted-foreground mb-6">Pago único - Acceso inmediato</div>
              <Badge className="gradient-warning text-xl px-8 py-3 text-white animate-pulse-glow">
                ¡Ahorras $5! (Descuento especial de despedida)
              </Badge>
            </div>
          </Card>

          <Card className="glass-lg p-8 text-center border-green-500/50 glow animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-black text-green-600 mb-6">
              🛡️ ÚLTIMA OPORTUNIDAD - PRECIO ESPECIAL $14
            </h3>
            <p className="text-lg mb-4">
              <strong>Esta es tu última oportunidad de proteger tu inversión de $36</strong>
            </p>
            <p className="text-lg mb-8">
              Si sales de esta página, tendrás que pagar $19 (si es que vuelve a estar disponible)
            </p>

            <div id="hotmart-sales-funnel" className="mb-6 min-h-[200px] flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-sm text-muted-foreground">Cargando formulario de pago seguro...</p>
              </div>
            </div>

            <div className="text-center mt-6">
              <Badge className="gradient-success text-lg px-6 py-3 text-white">
                ✅ Solo $14 - Descuento especial de despedida
              </Badge>
            </div>
          </Card>

          <Card className="glass-lg p-8 text-center border-orange-500/50 animate-slide-up">
            <div className="text-5xl mb-6 animate-pulse">⏰</div>
            <h3 className="text-2xl md:text-3xl font-black text-orange-600 mb-6">⚠️ ESTA OFERTA EXPIRA EN:</h3>
            <p className="text-lg mb-4">
              <strong>$14 es nuestro precio más bajo de la historia.</strong>
            </p>
            <p className="text-lg mb-6">
              Si no aprovechas ahora, tendrás que pagar <strong>$19 completos</strong> (si vuelve a estar disponible).
            </p>
            <Badge variant="destructive" className="text-lg px-6 py-3 mb-6">
              Después de esta página: $19 o NUNCA MÁS
            </Badge>
            <p className="text-base text-muted-foreground">
              Esta es literalmente tu última oportunidad de blindar tu relación.
            </p>
          </Card>

          {/* Timer */}
          <div className="text-center">
            <Timer />
          </div>

          {/* Scarcity */}
          <Card className="glass-lg p-8 text-center border-red-500/50 animate-slide-up">
            <h3 className="text-2xl font-black text-red-600 mb-4">🚨 OFERTA VÁLIDA SOLO PARA LOS PRÓXIMOS</h3>
            <div className="text-6xl font-black text-red-600 mb-2 animate-pulse-glow">{spotsRemaining}</div>
            <div className="text-xl font-bold text-red-600 mb-6">COMPRADORES</div>

            <Card className="glass p-6 mb-6">
              <p className="font-bold mb-4">¿Por qué limitamos?</p>
              <p className="text-sm text-muted-foreground mb-4">
                Porque el Sistema de Blindaje incluye soporte personalizado por WhatsApp durante 90 días.
                <br />
                Solo podemos atender {spotsRemaining} casos simultáneamente.
              </p>

              <div className="text-left space-y-2">
                <p className="text-red-600 font-bold text-sm">
                  <strong>DESPUÉS DE {spotsRemaining} VENTAS:</strong>
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Precio sube a $97</li>
                  <li>• Se elimina el soporte personalizado</li>
                  <li>• Solo queda la versión básica</li>
                </ul>
              </div>
            </Card>
          </Card>

          {/* Guarantees */}
          <Card className="glass-lg p-8 border-green-500/50 animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-black text-center text-green-600 mb-8">
              🛡️ GARANTÍA TRIPLE BLINDAJE
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🔒",
                  title: "1. GARANTÍA DE PERMANENCIA:",
                  description:
                    "Si ella te deja después de implementar el Sistema de Blindaje, te devolvemos 200% de lo que pagaste ($54 de vuelta por tu inversión de $27)",
                },
                {
                  icon: "🛡️",
                  title: "2. GARANTÍA DE INMUNIDAD:",
                  description:
                    "Si ella muestra interés romántico en otro hombre en los próximos 6 meses, te devolvemos todo + $50 de compensación",
                },
                {
                  icon: "📈",
                  title: "3. GARANTÍA DE EVOLUCIÓN:",
                  description:
                    "Si la relación no mejora significativamente mes a mes, te devolvemos todo sin hacer preguntas",
                },
              ].map((guarantee, index) => (
                <Card key={index} className="glass p-6 text-center">
                  <div className="text-4xl mb-4">{guarantee.icon}</div>
                  <h4 className="font-black text-green-600 mb-3">{guarantee.title}</h4>
                  <p className="text-sm">{guarantee.description}</p>
                </Card>
              ))}
            </div>
          </Card>

          <Card className="glass-lg p-8 text-center border-blue-500/50 animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-black text-blue-600 mb-6">🤔 ÚLTIMA REFLEXIÓN...</h3>

            <div className="space-y-4 mb-8 text-lg">
              <p>
                <strong>Ya invertiste $19 en el Plan A</strong> porque quieres reconquistar a ella.
              </p>
              <p>
                <strong>Ya invertiste $17 en el Protocolo de Dominancia</strong> para que sea obsesión.
              </p>
              <p>
                <strong>Total invertido hasta ahora: $36</strong>
              </p>
            </div>

            <Card className="glass p-6 border-yellow-500/50 mb-8">
              <p className="text-xl font-bold text-orange-600 mb-4">
                ¿Vas a arriesgar PERDER esos $36 + a ella otra vez por no invertir $14 más?
              </p>
              <p className="text-lg font-bold text-red-600 mb-4">
                ¿Vas a dejar que otro hombre se la lleve en los próximos meses?
              </p>
            </Card>

            <p className="text-2xl font-black text-blue-600 mb-4">
              $14 hoy vs perder $36 + años de sufrimiento mañana.
            </p>
            <p className="text-xl font-bold text-green-600">Esta es tu ÚLTIMA oportunidad.</p>
          </Card>

          <div className="text-center space-y-6">
            <Button
              onClick={handleCTAClick}
              className="gradient-primary text-white text-xl md:text-2xl font-black px-12 py-6 rounded-2xl glow animate-pulse-glow hover:scale-105 transition-all duration-300"
            >
              🛡️ SÍ, QUIERO PROTEGER MI INVERSIÓN DE $36
              <div className="text-base font-normal mt-2">
                Solo $14 (precio especial) - Acceso inmediato + Garantía triple
              </div>
            </Button>

            <div className="text-center">
              <a
                href="https://comprarplanseguro.shop/dw-II/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
              >
                No, prefiero perder mis $36 y arriesgar que ella conozca a alguien más
              </a>
            </div>

            <Card className="glass p-6 border-red-500/50 max-w-2xl mx-auto">
              <p className="text-red-600 font-bold">
                ⚠️ ÚLTIMA ADVERTENCIA: Si sales de esta página sin comprar
                <br />
                Perderás para siempre la oportunidad de blindar tu relación por $14
                <br />Y arriesgarás perder tu inversión de $36 + a ella otra vez
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
