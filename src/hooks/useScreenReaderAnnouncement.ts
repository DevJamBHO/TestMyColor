import { useEffect } from 'react';

export const useScreenReaderAnnouncement = (message: string, isActive: boolean) => {
    useEffect(() => {
        if (!isActive || !message) return;

        // Créer un élément pour l'annonce
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.style.position = 'absolute';
        announcement.style.left = '-10000px';
        announcement.style.width = '1px';
        announcement.style.height = '1px';
        announcement.style.overflow = 'hidden';
        announcement.textContent = message;

        document.body.appendChild(announcement);

        // Nettoyer après un délai
        const timeout = setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);

        return () => {
            clearTimeout(timeout);
            if (document.body.contains(announcement)) {
                document.body.removeChild(announcement);
            }
        };
    }, [message, isActive]);
};
