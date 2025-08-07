import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Flex, Image, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { useState, useRef } from 'react';
export default function Shirin() {
    const [showTogether, setShowTogether] = useState(false);
    const [dragging, setDragging] = useState(null);
    const [dragPos, setDragPos] = useState(null);
    const dragSource = useRef(null);
    const touchSource = useRef(null);
    const nazihRef = useRef(null);
    const shirinRef = useRef(null);
    // Drag event handlers (desktop)
    const handleDragStart = (who, e) => {
        dragSource.current = who;
        setDragging(who);
        if (e) {
            // For desktop, set drag image to empty so we can use our own
            const img = new window.Image();
            img.src = '';
            e.dataTransfer.setDragImage(img, 0, 0);
        }
    };
    const handleDrag = (e) => {
        setDragPos({ x: e.clientX, y: e.clientY });
    };
    const handleDragOver = (e) => {
        e.preventDefault();
    };
    const handleDrop = (who) => {
        if (dragSource.current && dragSource.current !== who) {
            setShowTogether(true);
        }
        dragSource.current = null;
        setDragging(null);
        setDragPos(null);
    };
    const handleDragEnd = (e) => {
        // On drag end, check if dropped over the other image
        if (dragging && dragPos) {
            let targetRef = dragging === 'nazih' ? shirinRef : nazihRef;
            const target = targetRef.current;
            if (target) {
                const rect = target.getBoundingClientRect();
                if (dragPos.x >= rect.left &&
                    dragPos.x <= rect.right &&
                    dragPos.y >= rect.top &&
                    dragPos.y <= rect.bottom) {
                    setShowTogether(true);
                }
            }
        }
        setDragging(null);
        setDragPos(null);
    };
    // Touch event handlers (mobile)
    const handleTouchStart = (who, e) => {
        touchSource.current = who;
        setDragging(who);
        if (e && e.touches.length > 0) {
            setDragPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        }
    };
    const handleTouchMove = (e) => {
        if (dragging && e.touches.length > 0) {
            setDragPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        }
    };
    const handleTouchEnd = (who) => {
        // On touch end, check if released over the other image
        if (dragging && dragPos) {
            let targetRef = dragging === 'nazih' ? shirinRef : nazihRef;
            const target = targetRef.current;
            if (target) {
                const rect = target.getBoundingClientRect();
                if (dragPos.x >= rect.left &&
                    dragPos.x <= rect.right &&
                    dragPos.y >= rect.top &&
                    dragPos.y <= rect.bottom) {
                    setShowTogether(true);
                }
            }
        }
        touchSource.current = null;
        setDragging(null);
        setDragPos(null);
    };
    return (_jsxs(Box, { minH: "100vh", bg: useColorModeValue('gray.50', 'gray.800'), py: 12, children: [_jsx(Heading, { as: "h2", size: "xl", textAlign: "center", color: "teal.700", mb: 8, children: "Shirin & Nazih" }), _jsxs(Flex, { justify: "center", align: "center", gap: 8, direction: { base: 'column', md: 'row' }, maxW: { base: '100%', md: '1100px' }, mx: "auto", w: "100%", children: [_jsxs(VStack, { spacing: 4, flex: 1, ref: nazihRef, draggable: true, onDragStart: e => handleDragStart('nazih', e), onDrag: handleDrag, onDragOver: handleDragOver, onDrop: () => handleDrop('nazih'), onDragEnd: handleDragEnd, onTouchStart: e => handleTouchStart('nazih', e), onTouchMove: handleTouchMove, onTouchEnd: () => handleTouchEnd('nazih'), style: { zIndex: dragging === 'nazih' ? 1001 : undefined }, children: [_jsx(Image, { src: "/public/nazih.jpg", alt: "Nazih ", borderRadius: "full", boxSize: "200px", objectFit: "cover", boxShadow: "lg", draggable: true, aspectRatio: 1, style: dragging === 'nazih' && dragPos ? {
                                    position: 'fixed',
                                    left: dragPos.x - 100,
                                    top: dragPos.y - 100,
                                    pointerEvents: 'none',
                                    zIndex: 2000,
                                    opacity: 0.8
                                } : {} }), _jsx(Text, { fontWeight: "bold", fontSize: "lg", children: "Nazih " })] }), _jsx(VStack, { spacing: 4, flex: 2, minH: "250px", justify: "center", align: "center", children: showTogether && (_jsx(Image, { src: "/public/together.jpg", alt: "Together", borderRadius: "full", boxSize: { base: '250px', md: '350px' }, objectFit: "cover", boxShadow: "xl", aspectRatio: 1 })) }), _jsxs(VStack, { spacing: 4, flex: 1, ref: shirinRef, draggable: true, onDragStart: e => handleDragStart('shirin', e), onDrag: handleDrag, onDragOver: handleDragOver, onDrop: () => handleDrop('shirin'), onDragEnd: handleDragEnd, onTouchStart: e => handleTouchStart('shirin', e), onTouchMove: handleTouchMove, onTouchEnd: () => handleTouchEnd('shirin'), style: { zIndex: dragging === 'shirin' ? 1001 : undefined }, children: [_jsx(Image, { src: "/public/shirin.jpg", alt: "Shirin ", borderRadius: "full", boxSize: "200px", objectFit: "cover", boxShadow: "lg", draggable: true, aspectRatio: 1, style: dragging === 'shirin' && dragPos ? {
                                    position: 'fixed',
                                    left: dragPos.x - 100,
                                    top: dragPos.y - 100,
                                    pointerEvents: 'none',
                                    zIndex: 2000,
                                    opacity: 0.8
                                } : {} }), _jsx(Text, { fontWeight: "bold", fontSize: "lg", children: "Shirin" })] })] })] }));
}
