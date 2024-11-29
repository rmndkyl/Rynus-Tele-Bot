# Rynus Telegram Bot Automation

![image](https://github.com/user-attachments/assets/4839ef2a-afb3-4fda-847b-a88b9b3f8388)

This is a Node.js automation script for Rynus Telegram mini app that automates daily check-in and labeling tasks.

## Features

- Multi-account support
- Automatic daily check-in
- Automated labeling tasks with power management
- Heartbeat updates
- Real-time balance tracking
- Colorful console output
- Progress countdown timers

## Prerequisites

- Node.js v14+
- npm

## Installation

1. Clone this repository

```bash
git clone https://github.com/rmndkyl/Rynus-Tele-Bot.git
cd Rynus-Tele-Bot
```

2. Install dependencies

```bash
npm install
```

## Configuration

1. Register [Rynus MiniApp](https://t.me/RynusAppBot/rynus_labeling_mini_app?startapp=1681873043)

2. Get your `query_id`

3. For multiple accounts, add each query on a new line in `data.txt`

## Usage

Run the script:

```bash
node main.js
```

The script will:

- Load accounts from data.txt
- Perform daily check-in
- Execute labeling tasks when power is available
- Update heartbeat
- Automatically restart cycle after 1 hour

## Features Detail

- **Daily Check-in**: Automatically checks in daily for rewards
- **Power Management**: Tracks and manages user power for labeling tasks
- **Balance Tracking**: Shows real-time balance updates
- **Multi-account**: Supports multiple accounts from data.txt
- **Error Handling**: Robust error handling and automatic retries
- **Progress Display**: Shows detailed progress with countdown timers

## Configuration Files

- `colors.js`: Console color configurations
- `banner.js`: ASCII art banner configuration
- `countdown.js`: Countdown timer configurations
- `logger.js`: Winston logger configurations

## Notes

- The script requires valid auth tokens to work
- Each labeling task consumes 1 power
- Power regenerates at rate of 1 per 20 minutes
- Maximum power capacity is 20

## ☕️ Traktir kopinya & Thanks for Supporting us:

- https://sociabuzz.com/layerairdrop/tribe
- https://saweria.co/LayerAirdrop
- https://trakteer.id/layerairdrop/tip
- **EVM : `0x3E0BD1156172c03E497157838f218CDF77Ab2885`**
- **SOLANA : `4DMvckFnSrm7fymVaPrXULrCq4h1yvfTWq5aHXLpLKsn`**

## Disclaimer

This script is for educational purposes only. Use at your own risk and make sure to comply with Rynus's terms of service.

## License

MIT License
