import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
export function LanguageSwitch() {
  const [isMobile, setIsMobile] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Select onValueChange={(value) => setLanguage(value)}>
      <SelectTrigger className=" w-fit sm:w-[120px] bg-[var(--color-bg-main)] focus-visible:outline-none focus:ring focus:border-transparent focus:ring-[var(--border-color-hover)]">
        <SelectValue
          placeholder={
            language === 'en'
              ? isMobile
                ? 'EN 🇺🇸'
                : 'English 🇺🇸'
              : language === 'fr'
              ? isMobile
                ? 'FR 🇫🇷'
                : 'Français 🇫🇷'
              : language === 'es'
              ? isMobile
                ? 'ES 🇪🇸'
                : 'Español 🇪🇸'
              : 'Select Language'
          }
        />
      </SelectTrigger>
      <SelectContent className="bg-[var(--color-grey-0)]">
        <SelectGroup>
          <SelectItem value="en">
            {isMobile ? 'EN 🇺🇸' : 'English 🇺🇸'}
          </SelectItem>
          <SelectItem value="fr">
            {isMobile ? 'FR 🇫🇷' : 'Français 🇫🇷'}
          </SelectItem>
          <SelectItem value="es">
            {isMobile ? 'ES 🇪🇸' : 'Español 🇪🇸'}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
