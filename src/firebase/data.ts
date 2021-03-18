const now = new Date();

export const dummyUsers: User[] = [
	{
		id: "604f53aafc13ae51a3000011",
		name: "Padget Phebey",
		passcode: "111111",
		avatar: "https://eu.ui-avatars.com/api/?name=p+p",
		lastSeen: now,
		contacts: [
			{
				userId: "604f53aafc13ae51a3000012",
				name: "Valma Tidbold",
				avatar: "https://eu.ui-avatars.com/api/?name=v+t",
			},
			{
				userId: "604f53aafc13ae51a3000013",
				name: "Fancy Rhoades",
				avatar: "https://eu.ui-avatars.com/api/?name=f+r",
			},
		],
	},
	{
		id: "604f53aafc13ae51a3000012",
		name: "Valma Tidbold",
		passcode: "222222",
		avatar: "https://eu.ui-avatars.com/api/?name=v+t",
		lastSeen: now,
		contacts: [
			{
				userId: "604f53aafc13ae51a3000011",
				name: "Padget Phebey",
				avatar: "https://eu.ui-avatars.com/api/?name=p+p",
			},
			{
				userId: "604f53aafc13ae51a3000013",
				name: "Fancy Rhoades",
				avatar: "https://eu.ui-avatars.com/api/?name=f+r",
			},
		],
	},
	{
		id: "604f53aafc13ae51a3000013",
		passcode: "333333",
		name: "Fancy Rhoades",
		avatar: "https://eu.ui-avatars.com/api/?name=f+r",
		lastSeen: now,
		contacts: [
			{
				userId: "604f53aafc13ae51a3000012",
				name: "Valma Tidbold",
				avatar: "https://eu.ui-avatars.com/api/?name=v+t",
			},
			{
				userId: "604f53aafc13ae51a3000011",
				name: "Padget Phebey",
				avatar: "https://eu.ui-avatars.com/api/?name=p+p",
			},
		],
	},
	{
		id: "604f53aafc13ae51a3000014",
		passcode: "444444",
		name: "Ginger Blackburn",
		avatar: "https://eu.ui-avatars.com/api/?name=n+a",
		lastSeen: now,
		contacts: [],
	},
	{
		id: "604f53aafc13ae51a3000015",
		passcode: "555555",
		name: "Nanny Greim",
		avatar: "https://eu.ui-avatars.com/api/?name=n+a",
		lastSeen: now,
		contacts: [],
	},
	{
		id: "604f53aafc13ae51a3000016",
		passcode: "666666",
		name: "Colby Celle",
		avatar: "https://eu.ui-avatars.com/api/?name=n+a",
		lastSeen: now,
		contacts: [],
	},
	{
		id: "604f53aafc13ae51a3000017",
		name: "Lucian Ivasechko",
		passcode: "777777",

		avatar: "https://eu.ui-avatars.com/api/?name=n+a",
		lastSeen: now,
		contacts: [],
	},
];

export const dummyMessages: Message[] = [
	{
		id: "604f53aafc13ae51a300000f",
		type: "Soffe",
		sentBy: "Saunders Soffe",
		channel: "Arsmith",
		message: "message Fortune Brands Home & Security, Inc.",
		fileUrl:
			"https://vistaprint.com/mollis.aspx?adipiscing=tincidunt&elit=ante&proin=vel&interdum=ipsum&mauris=praesent&non=blandit&ligula=lacinia&pellentesque=erat&ultrices=vestibulum&phasellus=sed&id=magna&sapien=at&in=nunc&sapien=commodo&iaculis=placerat&congue=praesent&vivamus=blandit&metus=nam&arcu=nulla&adipiscing=integer&molestie=pede&hendrerit=justo&at=lacinia&vulputate=eget&vitae=tincidunt&nisl=eget&aenean=tempus&lectus=vel&pellentesque=pede&eget=morbi&nunc=porttitor&donec=lorem&quis=id&orci=ligula&eget=suspendisse&orci=ornare&vehicula=consequat&condimentum=lectus&curabitur=in&in=est&libero=risus&ut=auctor&massa=sed&volutpat=tristique&convallis=in&morbi=tempus&odio=sit&odio=amet&elementum=sem&eu=fusce&interdum=consequat&eu=nulla&tincidunt=nisl",
		time: now,
	},
	{
		id: "604f53aafc13ae51a3000010",
		type: "Baumaier",
		sentBy: "Lucila Baumaier",
		channel: "Karolczyk",
		message: "message Ambarella, Inc.",
		fileUrl:
			"http://usda.gov/aliquam/lacus/morbi/quis/tortor.aspx?habitasse=lacus&platea=at&dictumst=turpis&etiam=donec&faucibus=posuere&cursus=metus&urna=vitae&ut=ipsum&tellus=aliquam&nulla=non&ut=mauris&erat=morbi&id=non&mauris=lectus&vulputate=aliquam&elementum=sit&nullam=amet&varius=diam&nulla=in&facilisi=magna&cras=bibendum&non=imperdiet&velit=nullam&nec=orci&nisi=pede&vulputate=venenatis&nonummy=non&maecenas=sodales&tincidunt=sed&lacus=tincidunt&at=eu&velit=felis&vivamus=fusce&vel=posuere&nulla=felis&eget=sed&eros=lacus&elementum=morbi&pellentesque=sem&quisque=mauris&porta=laoreet&volutpat=ut&erat=rhoncus&quisque=aliquet",
		time: now,
	},
];
