export const useITSkill = () => {
    return useState('itskill', () => ({
        data: {
            skills : {
                'Technical Troubleshooting': 'Ability to diagnose and resolve hardware and software issues.',
                'Operating System Knowledge': 'Expertise in installing, configuring, and managing operating systems like Windows.',
                'Networking': 'Understanding of LAN, and basic network troubleshooting.',
                'Hardware Maintenance': 'Knowledge of troubleshooting and maintaining computer hardware (desktops, laptops, printers, etc.).',
                'Remote Support': 'Experience using remote access tools to troubleshoot issues for off-site employees.',
                'System Security': 'Familiarity with antivirus programs.',
                'Programming Support': 'Provided support in writing code for microcontrollers (e.g., ESP32, Arduino) to transmit data and trigger LINE notifications, including monitoring and controlling environmental conditions in the data center room (e.g., temperature, humidity).',
            }
        }
}))
}
    