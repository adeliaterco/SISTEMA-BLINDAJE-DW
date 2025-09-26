"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ExitIntentModalProps {
  isOpen: boolean
  onClose: () => void
  onCTA: () => void
}

export function ExitIntentModal({ isOpen, onClose, onCTA }: ExitIntentModalProps) {
  const handleCTA = () => {
    if (typeof window !== "undefined") {
      if ((window as any).fbq) {
        ;(window as any).fbq("track", "InitiateCheckout", {
          content_name: "Sistema de Blindaje Total - Exit Intent",
          value: 27,
          currency: "USD",
        })
      }

      if ((window as any).gtag) {
        ;(window as any).gtag("event", "begin_checkout", {
          currency: "USD",
          value: 27,
          items: [
            {
              item_id: "blindaje-total-exit",
              item_name: "Sistema de Blindaje Total - Exit Intent",
              category: "Exit Intent",
              quantity: 1,
              price: 27,
            },
          ],
        })
      }
    }

    onCTA()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-lg max-w-2xl border-red-500/50">
        <Card className="p-8 text-center border-none bg-transparent">
          <div className="text-5xl mb-6 animate-pulse">🚨</div>
          <h2 className="text-2xl md:text-3xl font-black text-red-600 mb-6">¡ESPERA!</h2>
          <p className="text-lg font-bold mb-4">¿Realmente vas a arriesgar perder tu inversión de $36?</p>
          <p className="text-base mb-4">El 67% de los hombres que no blindan su relación la vuelven a perder.</p>
          <p className="text-sm text-muted-foreground mb-8">Solo $27 protege todo lo que has invertido hasta ahora.</p>

          <div className="space-y-4">
            <Button
              onClick={handleCTA}
              className="gradient-primary text-white font-bold px-8 py-4 rounded-xl glow w-full"
            >
              SÍ, QUIERO PROTEGER MI INVERSIÓN
            </Button>
            <Button variant="ghost" onClick={onClose} className="text-sm text-muted-foreground">
              No, prefiero arriesgar todo
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-6">Esta ventana no aparecerá otra vez</p>
        </Card>
      </DialogContent>
    </Dialog>
  )
}
