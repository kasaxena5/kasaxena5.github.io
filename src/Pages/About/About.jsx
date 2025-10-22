import { Component } from 'react';
import { Text } from '@fluentui/react/lib/Text';
import { Persona, PersonaSize} from '@fluentui/react/lib/Persona';
import { connect } from 'react-redux';

class About extends Component {
  render() {
    return (
      <div>
      <div>
        <Text>
    I'm a software engineer passionate about building scalable systems, automation, and clean architecture.
    My experience spans React.js, C#, ASP.NET, PowerShell, and Azure, where I've worked on frontend and backend services, monitoring pipelines, debugging, automation scripts and performance optimization.
    I bring hands-on expertise in AI integration, having implemented Copilot in Exchange Admin Center during the early adoption phase—long before copilots became mainstream. 
    This gave me core experience in bridging natural language with computer instructions, deepening my understanding of program synthesis and practical applications of AI in real-world systems.
    I'm constantly exploring ways to improve efficiency through automation and I'm now diving deeper into AI integration, focusing on applying existing models to real-world problems. I also have a growing interest in game development, both from a design and technical perspective, where I enjoy experimenting with mechanics, storytelling, and player experience.
    Beyond coding, I'm fascinated by the intersection of technology and human psychology, and I'm working on developing skills in system design, architecture, and technical writing.
        </Text>
      </div>
      <Persona
        imageUrl=""
        imageInitials="KS"
        text="Kartikeya Saxena"
        secondaryText="Software Engineer II"
        tertiaryText="Microsoft Corporation"
        optionalText="kasaxena@microsoft.com"
        size={PersonaSize.size120}
        imageAlt="Kartikeya Saxena, no presence detected"
      />
      </div>

    );
  }
}

// Get data from both reducers
const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
