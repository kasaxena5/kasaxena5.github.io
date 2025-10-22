import React from "react";
import { Text } from "@fluentui/react/lib/Text";
import { Stack } from '@fluentui/react/lib/Stack';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';


const styles = mergeStyleSets({
    card: {
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        padding: 16,
        borderRadius: 8,
        background: "white",
        marginBottom: 12,
    },
});

class ExperienceCard extends React.Component {
    render() {
        const { title, company, summary } = this.props;
        return (
            <Stack className={styles.card}>
                <Text variant="xLarge">{title}</Text>
                <Text variant="mediumPlus">{company}</Text>
                <Text>{summary}</Text>
                <Stack>
                    <PrimaryButton text="Show More Details" />
                </Stack>
            </Stack>
        );
    }
}
export default ExperienceCard;