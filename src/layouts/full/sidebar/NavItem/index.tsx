import React, {ReactNode} from "react";
// mui imports
import {
    ListItemIcon,
    ListItem,
    List,
    styled,
    ListItemText,
    useTheme,
    ListItemButton,
} from "@mui/material";
import Link from "next/link";

type NavGroup = {
    [x: string]: any;
    id?: string;
    navlabel?: boolean;
    subheader?: string;
    title?: string;
    icon?: any;
    href?: any;
    onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
};

interface ItemType {
    item: NavGroup;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    hideMenu?: any;
    level?: number | any;
    pathDirect: string;
}

const NavItem = ({item, level, pathDirect, onClick}: ItemType) => {
    const Icon = item.icon;
    const theme = useTheme();
    const itemIcon = <Icon stroke={1.5} size="1.3rem"/>;

    const ListItemStyled = styled(ListItem)(() => ({
        padding: 0,
        ".MuiButtonBase-root": {
            whiteSpace: "nowrap",
            marginBottom: "2px",
            padding: "8px 10px",
            borderRadius: "8px",
            backgroundColor: "#1E1E2D",
            color: "white",
            paddingLeft: "10px",
            "&:hover": {
                backgroundColor: theme.palette.grey["400"],
                color: "black",
            },
            "&.Mui-selected": {
                color: "black",
                backgroundColor: theme.palette.grey["300"],
                "&:hover": {
                    backgroundColor: theme.palette.grey["400"],
                    color: "black",
                },
            },
        },
    }));

    return (
        <List component="div" disablePadding key={item.id} >
            <ListItemStyled>
                <ListItemButton
                    component={Link}
                    href={item.href}
                    disabled={item.disabled}
                    selected={pathDirect === item.href}
                    target={item.external ? "_blank" : ""}
                    onClick={onClick}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: "36px",
                            p: "3px 0",
                            color: "inherit",
                        }}
                    >
                        {itemIcon}
                    </ListItemIcon>
                    <ListItemText>
                        <>{item.title}</>
                    </ListItemText>
                </ListItemButton>
            </ListItemStyled>
        </List>
    );
};

export default NavItem;
