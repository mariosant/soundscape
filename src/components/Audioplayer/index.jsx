import React from "react";
import { Box, Container } from "@material-ui/core";
import * as I from "@material-ui/icons";
import AudioButton from "../Audiobutton";

const Audioplayer = () => (
	<Container maxWidth="sm">
		<Box display="flex" flexWrap="wrap" justifyContent="center">
			<AudioButton
				icon={I.NaturePeople}
				src="https://actions.google.com/sounds/v1/ambiences/carnival_atmosphere.ogg"
			/>
			<AudioButton
				icon={I.LocalCafe}
				src="https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg"
			/>
			<AudioButton
				icon={I.LocalCarWash}
				src="https://actions.google.com/sounds/v1/ambiences/highway_near_waterfront.ogg"
			/>
			<AudioButton
				icon={I.NightsStay}
				src="https://actions.google.com/sounds/v1/ambiences/jungle_atmosphere_late_night.ogg"
			/>
			<AudioButton
				icon={I.Brightness2}
				src="https://actions.google.com/sounds/v1/ambiences/warm_afternoon_outdoors.ogg"
			/>
			<AudioButton
				icon={I.Pets}
				src="https://actions.google.com/sounds/v1/animals/cat_purr.ogg"
			/>
			<AudioButton
				icon={I.Keyboard}
				src="https://actions.google.com/sounds/v1/office/computer_typing_slow.ogg"
			/>
			<AudioButton
				icon={I.BeachAccess}
				src="https://actions.google.com/sounds/v1/human_voices/summer_beach_ambience.ogg"
			/>
			<AudioButton
				icon={I.Waves}
				src="https://actions.google.com/sounds/v1/water/waves_crashing_on_rock_beach.ogg"
			/>
			<AudioButton
				icon={I.Whatshot}
				src="https://actions.google.com/sounds/v1/ambiences/fire.ogg"
			/>
			<AudioButton
				icon={I.BugReport}
				src="https://actions.google.com/sounds/v1/ambiences/crickets_with_distant_traffic.ogg"
			/>
			<AudioButton
				icon={I.Autorenew}
				src="https://actions.google.com/sounds/v1/transportation/windshield_wipers_no_water.ogg"
			/>
			<AudioButton
				icon={I.AirportShuttle}
				src="https://actions.google.com/sounds/v1/transportation/truck_drive.ogg"
			/>
			<AudioButton
				icon={I.Commute}
				src="https://actions.google.com/sounds/v1/transportation/suburban_streets_summer.ogg"
			/>
			<AudioButton
				icon={I.Lens}
				src="https://actions.google.com/sounds/v1/household/long_silence_at_top.ogg"
			/>
			<AudioButton
				icon={I.LeakAdd}
				src="https://actions.google.com/sounds/v1/household/wood_scraps_shuffling.ogg"
			/>
			<AudioButton
				icon={I.TransferWithinAStation}
				src="https://actions.google.com/sounds/v1/foley/footsteps_on_fallen_leaves.ogg"
			/>
			<AudioButton
				icon={I.Domain}
				src="https://actions.google.com/sounds/v1/foley/metal_rattling_rhythmically.ogg"
			/>
			<AudioButton
				icon={I.DragIndicator}
				src="https://actions.google.com/sounds/v1/foley/objects_in_plastic_bottle.ogg"
			/>
			<AudioButton
				icon={I.Category}
				src="https://actions.google.com/sounds/v1/foley/slide_on_gravel_series.ogg"
			/>
		</Box>
	</Container>
);

export default Audioplayer;
