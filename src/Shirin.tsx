import { Box, Flex, Image, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react';

import { useState, useRef } from 'react';

export default function Shirin() {

  const [showTogether, setShowTogether] = useState(false);
  const lastTap = useRef<number>(0);
  const [dragging, setDragging] = useState<string | null>(null);
  const [dragPos, setDragPos] = useState<{ x: number; y: number } | null>(null);
  const dragSource = useRef<string | null>(null);
  const touchSource = useRef<string | null>(null);
  const nazihRef = useRef<HTMLDivElement>(null);
  const shirinRef = useRef<HTMLDivElement>(null);

  // Drag event handlers (desktop)
  const handleDragStart = (who: string, e?: React.DragEvent) => {
    dragSource.current = who;
    setDragging(who);
    if (e) {
      // For desktop, set drag image to empty so we can use our own
      const img = new window.Image();
      img.src = '';
      e.dataTransfer.setDragImage(img, 0, 0);
    }
  };
  const handleDrag = (e: React.DragEvent) => {
    setDragPos({ x: e.clientX, y: e.clientY });
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleDrop = (who: string) => {
    if (dragSource.current && dragSource.current !== who) {
      setShowTogether(true);
    }
    dragSource.current = null;
    setDragging(null);
    setDragPos(null);
  };
  const handleDragEnd = (e?: React.DragEvent) => {
    // On drag end, check if dropped over the other image
    if (dragging && dragPos) {
      let targetRef = dragging === 'nazih' ? shirinRef : nazihRef;
      const target = targetRef.current;
      if (target) {
        const rect = target.getBoundingClientRect();
        if (
          dragPos.x >= rect.left &&
          dragPos.x <= rect.right &&
          dragPos.y >= rect.top &&
          dragPos.y <= rect.bottom
        ) {
          setShowTogether(true);
        }
      }
    }
    setDragging(null);
    setDragPos(null);
  };

  // Touch event handlers (mobile)
  const handleTouchStart = (who: string, e?: React.TouchEvent) => {
    touchSource.current = who;
    setDragging(who);
    if (e && e.touches.length > 0) {
      setDragPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragging && e.touches.length > 0) {
      setDragPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  };
  const handleTouchEnd = (who: string) => {
    // On touch end, check if released over the other image
    if (dragging && dragPos) {
      let targetRef = dragging === 'nazih' ? shirinRef : nazihRef;
      const target = targetRef.current;
      if (target) {
        const rect = target.getBoundingClientRect();
        if (
          dragPos.x >= rect.left &&
          dragPos.x <= rect.right &&
          dragPos.y >= rect.top &&
          dragPos.y <= rect.bottom
        ) {
          setShowTogether(true);
        }
      }
    }
    touchSource.current = null;
    setDragging(null);
    setDragPos(null);
  };

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.50', 'gray.800')} py={12}>
      <Heading as="h2" size="xl" textAlign="center" color="teal.700" mb={8}>Shirin & Nazih</Heading>
      <Flex justify="center" align="center" gap={8} direction={{ base: 'column', md: 'row' }} maxW={{ base: '100%', md: '1100px' }} mx="auto" w="100%">
        {/* Left: Husband */}
        <VStack spacing={4} flex={1} ref={nazihRef} style={{ zIndex: dragging === 'nazih' ? 1001 : undefined }}>
          <Image
            src="nazih.JPG"
            alt="Nazih "
            borderRadius="full"
            boxSize="200px"
            objectFit="cover"
            boxShadow="lg"
            draggable
            aspectRatio={1}
            onDragStart={e => handleDragStart('nazih', e)}
            onDrag={handleDrag}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop('nazih')}
            onDragEnd={handleDragEnd}
            onTouchStart={e => handleTouchStart('nazih', e)}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => handleTouchEnd('nazih')}
            style={dragging === 'nazih' && dragPos ? {
              position: 'fixed',
              left: dragPos.x - 100,
              top: dragPos.y - 100,
              pointerEvents: 'none',
              zIndex: 2000,
              opacity: 0.8
            } : {}}
          />
          <Text fontWeight="bold" fontSize="lg">Nazih </Text>
        </VStack>
        {/* Middle: Together image, hidden until drag event */}
        <VStack
          spacing={4}
          flex={2}
          minH="250px"
          justify="center"
          align="center"
         
          style={{ cursor: showTogether ? 'pointer' : undefined }}
        >
          {showTogether && (
            <>
              <Image
                src="together.JPG"
                alt="Together"
                borderRadius="full"
                boxSize={{ base: '250px', md: '350px' }}
                objectFit="cover"
                boxShadow="xl"
                aspectRatio={1}
              />
              <Text fontSize="lg" color="teal.700" textAlign="center" mt={4}>
                Together, we make the perfect team. Every moment with you is my favorite memory. Love you always!
              </Text>
            </>
          )}
        </VStack>
        {/* Right: Wife */}
        <VStack spacing={4} flex={1} ref={shirinRef} style={{ zIndex: dragging === 'shirin' ? 1001 : undefined }}>
          <Image
            src="shirin.JPG"
            alt="Shirin "
            borderRadius="full"
            boxSize="200px"
            objectFit="cover"
            boxShadow="lg"
            draggable
            aspectRatio={1}
            onDragStart={e => handleDragStart('shirin', e)}
            onDrag={handleDrag}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop('shirin')}
            onDragEnd={handleDragEnd}
            onTouchStart={e => handleTouchStart('shirin', e)}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => handleTouchEnd('shirin')}
            style={dragging === 'shirin' && dragPos ? {
              position: 'fixed',
              left: dragPos.x - 100,
              top: dragPos.y - 100,
              pointerEvents: 'none',
              zIndex: 2000,
              opacity: 0.8
            } : {}}
          />
          <Text fontWeight="bold" fontSize="lg">Shirin</Text>
        </VStack>
      </Flex>
    </Box>
  );

}