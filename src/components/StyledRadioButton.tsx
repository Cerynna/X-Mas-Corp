import React from "react";
import styled from "styled-components";

interface StyledRadioButtonProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: React.ReactNode;
  value: string;
  name: string;
  borderColor?: string;
  backgroundColor?: string;
  disabled?: boolean;
}

const HiddenRadio = styled.input.attrs({ type: "radio" })`
  opacity: 0;
  position: absolute;
  left: -9999px;
`;

const Button = styled.label<{
  $checked: boolean;
  $borderColor?: string;
  $backgroundColor?: string;
  $disabled?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 1rem;
  border: 2px solid
    ${({ $checked, $borderColor, theme }) =>
      $checked ? $borderColor || theme.colors.primary.gold : theme.colors.winter.darkIce};
  background: ${({ $checked, $backgroundColor, theme }) =>
    $checked ? $backgroundColor || theme.colors.winter.iceBlue : "rgba(0,0,0,0.3)"};
  color: ${({ theme, $checked }) => ($checked ? theme.colors.primary.gold : theme.colors.neutral.white)};
  font-weight: 600;
  font-size: 1.1rem;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  box-shadow: ${({ $checked }) => ($checked ? "0 0 8px #FFD70055" : "none")};
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.gold};
    background: ${({ $checked, $backgroundColor, theme }) =>
      $checked ? $backgroundColor || theme.colors.winter.iceBlue : theme.colors.winter.darkIce};
  }
`;

export const StyledRadioButton: React.FC<StyledRadioButtonProps> = ({
  checked,
  onChange,
  label,
  value,
  name,
  borderColor,
  backgroundColor,
  disabled,
}) => (
  <Button
    $checked={checked}
    $borderColor={borderColor}
    $backgroundColor={backgroundColor}
    $disabled={disabled}
  >
    <HiddenRadio
      checked={checked}
      onChange={onChange}
      value={value}
      name={name}
      disabled={disabled}
    />
    {label}
  </Button>
);
