import { Avatar, Box, Flex, keyframes } from '@chakra-ui/react';

export default function AvatarWithRipple() {
  const size = '43px';
  const color = 'teal';

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="216px"
      w="full"
      overflow="hidden">
      {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
      <Box
        as="div"
        position="relative"
        w={size}
        h={size}
        _before={{
          content: "''",
          position: 'relative',
          display: 'block', 
          width: '300%',
          height: '300%',
          boxSizing: 'border-box',
          marginLeft: '-100%',
          marginTop: '-100%',
          borderRadius: '50%',
          bgColor: color,
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}>
        
        <Avatar
          src="https://ca.slack-edge.com/T049JC010P9-U04B0EBR7QU-2d5eb55e382a-192"
          size="full"
          position="absolute"
          top={0}
          right={1}
          left={0}
        />
      </Box>
    </Flex>
  );
}