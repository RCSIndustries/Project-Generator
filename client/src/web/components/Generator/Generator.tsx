import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useGeneratorServices } from "../../../services/generator/useGeneratorServices";
import { styled } from "styled-components";
import GenerateButtonComponent from "../../common/GenerateBtn/Generatebtn";
import { levelColors } from "../maps/maps";
import { SnackbarCloseReason } from '@mui/material/Snackbar';
import { MenuItem, FormControl, InputLabel, Select, Snackbar, Button, IconButton, Alert } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
const Wrapper = styled.main({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center', /* Vertically center the child element */
	/* Additional styles for the wrapper if needed */
	height: '80vh', /* Set a specific height to the wrapper, e.g., full viewport height */
});

const GenBox = styled.div({
	minWidth: '60%',
	maxWidth: '60%',
	minHeight: '50%',
	maxHeight: '50%',
	backgroundColor: '#27213c', /* Background color for the page */
	borderRadius: '10px', /* Adjust the value to control the amount of rounding */
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	position: 'relative',
	color: '#fff',
	padding: '20px'
});

const DataBox = styled.div({
	maxHeight: '75%',
	overflow: 'auto',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	position: 'relative',
	color: '#fff',
	padding: '20px',
});

const StyledHeader = styled.h2({
	textAlign: 'center',
})

const StyledText = styled.p({
	textAlign: 'center',
})
const ButtonBox = styled.div({
	position: 'absolute',
	bottom: '5%',
	left: '5%'
})

export const Generator = ({ data, setData }) => {
	const [open, setOpen] = React.useState(false);
	const [levelColor, setLevelColor] = useState('#007bff')
	const [lang, setLang] = useState("")

	const updateData = () => {
		setOpen(true);
		useGeneratorServices(setData, lang);
	};


	const handleClose = (
		event: React.SyntheticEvent | Event,
		reason?: SnackbarCloseReason,
	) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	const action = (
		<IconButton
			size="small"
			aria-label="close"
			color="inherit"
			onClick={handleClose}
		>
			<CloseIcon fontSize="large" />
		</IconButton>
	);

	useEffect(() => {
		//Execute this everytime the data changes
		setLevelColor('#007bff');
		if (data?.project_diff) {
			const level = Object.keys(levelColors).find(key => data.project_diff.includes(key));
			if (level) {
				setLevelColor(levelColors[level]);
			}
		}
	}, [data]);

	return (
		<React.Fragment>
			<Wrapper>
				<GenBox style={{ border: `2px solid ${levelColor}` }}>
					<DataBox>
						<StyledHeader>{data.project_name}</StyledHeader>
						<StyledText>{data.project_desc}</StyledText>
						<StyledText>{data.project_lang}</StyledText>
						<StyledText>{data.project_diff}</StyledText>
					</DataBox>
					<ButtonBox>
						<FormControl sx={{ m: 1, minWidth: 120 }} size="small" variant="standard" >
							<InputLabel id="lang-type-select-label">Language</InputLabel>
							<Select
								labelId="lang-select-label"
								id="lang-select"
								defaultValue={""}
								value={lang}
								label="Language"
								onChange={(value) =>
									value.target.value !== null ? setLang(value.target.value) : setLang("")
								}

							>
								<MenuItem value={"java"}>Java</MenuItem>
								<MenuItem value={"c++"}>C++</MenuItem>
								<MenuItem value={"python"}>Python</MenuItem>
								<MenuItem value={"go"}>Go</MenuItem>
								<MenuItem value={"c#"}>C#</MenuItem>
							</Select>
						</FormControl>
					</ButtonBox>
					<GenerateButtonComponent onClick={updateData} />

				</GenBox>
			</Wrapper>
			<Snackbar
				sx={{}}
				open={open}
				autoHideDuration={3000}
				onClose={handleClose}
				action={action}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
				<Alert
					onClose={handleClose}
					severity="error"
					variant="filled"
					sx={{ width: '100%' }}
				>
					Failure to Generate
				</Alert>
			</Snackbar>
		</React.Fragment>
	);
};

Generator.propTypes = {
	data: PropTypes.shape({}).isRequired,
	setData: PropTypes.func.isRequired,
};
