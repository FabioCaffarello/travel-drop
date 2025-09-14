import { Button, Input, Separator } from '@travel-drop/ui';

export default function DemoUiPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Demo UI Components</h1>
      <Separator />
      <Button variant="default">Botão padrão</Button>
      <Button variant="outline">Botão outline</Button>
      <Input placeholder="Digite algo..." />
    </div>
  );
}
