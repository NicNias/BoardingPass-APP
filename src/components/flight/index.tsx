import { Text, View } from "react-native";

import { styles } from "./styles";

interface Props {
  label: string;
  value: string;
}

export function Flight({ label, value }: Props) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}
