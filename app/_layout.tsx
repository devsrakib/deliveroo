import { Stack } from 'expo-router';

import CustomHeader from '@/components/CustomHeader';

export const unstable_settings = {
  initialRouteName: 'index',
};
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => {
            return <CustomHeader />;
          },
        }}
      />
    </Stack>
  );
}
