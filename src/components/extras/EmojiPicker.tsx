// components/EmojiPicker.tsx
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { PickerProps } from 'emoji-mart';

// Cargar el componente Picker dinámicamente
const Picker = dynamic(() => import('emoji-mart').then(mod => mod.Picker) as Promise<React.ComponentType<PickerProps>>, { ssr: false });

interface EmojiPickerProps {
  onSelect: (emoji: string) => void;
}

const EmojiPicker: React.FC<EmojiPickerProps> = ({ onSelect }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleEmojiSelect = (emoji: any) => {
    onSelect(emoji.native);
    setShowPicker(false);
  };

  return (
    <div>
      <button onClick={() => setShowPicker(!showPicker)}>
        {showPicker ? 'Close' : 'Open'} Emoji Picker
      </button>
      {showPicker && (
        <Picker
          onSelect={handleEmojiSelect}
          title="Pick your emoji…"
          emoji="point_up"
        />
      )}
    </div>
  );
};

export default EmojiPicker;
