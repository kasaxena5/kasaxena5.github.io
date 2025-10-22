import React from "react";
import { Text } from "@fluentui/react/lib/Text";
import { mergeStyleSets } from '@fluentui/react/lib/Styling';

const styles = mergeStyleSets({
  topBar: {
    height: 56,
    backgroundColor: "#000000ff", // Fluent UI primary blue
    color: "white",
    display: "flex",
    alignItems: "center",
    paddingLeft: 20,
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  title: {
    fontWeight: 600,
    fontSize: 20,
  },
});

export const TopBar = ({ title }) => (
  <div className={styles.topBar}>
    <Text className={styles.title}>{title}</Text>
  </div>
);
