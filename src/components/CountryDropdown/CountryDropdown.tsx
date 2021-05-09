import React, { useState, useEffect, useRef } from 'react';

import { allCountries as AllCountries } from './countries';
import { countryCodeToPascalCase, getCountryCodes } from './countries';
import type { CountryCodes, CustomLabels, OnSelect } from './countries';
import * as flags from './Flags/Countries';

const defaultPlaceholder = 'Select a country';
const defaultSearchPlaceholder = 'Search';

type Flags = typeof flags;
type FlagKey = keyof Flags;

export type CountryDropdownProps = {
  selected: string;
  className?: string;
  onSelect: OnSelect;
  selectButtonClassName?: string;
  showSelectedLabel?: boolean;
  showOptionLabel?: boolean;
  selectedSize?: number;
  optionsSize?: number;
  customLabels?: CustomLabels;
  placeholder?: React.ReactNode;
  searchable?: boolean;
  searchPlaceholder?: string;
  alignOptionsToRight?: boolean;
  countries?: CountryCodes;
  blacklistCountries?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  id?: string;
};

export const CountryDropdown: React.FC<CountryDropdownProps> = ({
  selected,
  onSelect,
  showSelectedLabel = true,
  showOptionLabel = true,
  optionsSize = 16,
  customLabels = {},
  placeholder,
  searchable = false,
  searchPlaceholder,
  countries,
  blacklistCountries = false,
  disabled = false,
  id,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [countriesOptions, setCountriesOptions] = useState<CountryCodes>([]);
  const [
    filteredCountriesOptions,
    setFilteredCountriesOptions,
  ] = useState<CountryCodes>([]);
  const [filterValue, setFilterValue] = useState<string>('');

  const selectedFlagRef = useRef(null);
  const optionsRef = useRef(null);
  const filterTextRef = useRef(null);

  const validSelectedValue = countriesOptions.includes(selected)
    ? selected
    : '';

  const options = filterValue ? filteredCountriesOptions : countriesOptions;

  const getFlag = (key: FlagKey): Flags[FlagKey] => flags[key];

  const getSelectedFlag = (): React.ReactElement => {
    const selectedFlagName = countryCodeToPascalCase(validSelectedValue);
    const SelectedFlag = getFlag(selectedFlagName as FlagKey);
    return <SelectedFlag className="w-full h-full" />;
  };

  const getLabel = (countryCode: string) => {
    return customLabels[countryCode] || AllCountries[countryCode];
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onOptionSelect = (countryCode: string) => {
    setFilterValue('');
    onSelect(countryCode);
  };

  const filterSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || '';
    setFilterValue(value);

    if (!value) {
      setFilteredCountriesOptions([]);
      return;
    }

    const filteredCountriesOptions = countriesOptions.filter((key) => {
      const label = getLabel(key);
      return label && label.toLowerCase().startsWith(value.toLowerCase());
    });

    setFilteredCountriesOptions(filteredCountriesOptions);
  };

  const closeDropdown = (e: MouseEvent) => {
    if (
      e.target !== selectedFlagRef.current &&
      e.target !== optionsRef.current &&
      e.target !== filterTextRef.current
    ) {
      setIsDropdownOpen(false);
    }
  };

  const closeDropdwownWithKeyboard = (e: React.KeyboardEvent) => {
    e.preventDefault();
    if (e.keyCode === 27) {
      //esc key: close dropdown
      setIsDropdownOpen(false);
    }
  };

  const onSelectWithKeyboard = (
    e: React.KeyboardEvent,
    countryCode: string
  ) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      //enter key: select option
      onOptionSelect(countryCode);
      setIsDropdownOpen(false);
    } else if (e.keyCode === 27) {
      //esc key: close dropdown
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    setCountriesOptions(getCountryCodes(countries, blacklistCountries));
  }, [countries, blacklistCountries]);

  useEffect(() => {
    window.addEventListener('click', closeDropdown);

    return () => {
      window.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <div className="relative mt-1" id={id} data-testid="rfs">
      <span className="inline-block w-full rounded-md shadow-sm">
        <button
          ref={selectedFlagRef}
          id="rfs-btn"
          type="button"
          className="relative z-0 w-full py-2 pl-3 pr-10 text-left transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md cursor-default focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          onClick={() => toggleDropdown()}
          onKeyUp={(e) => closeDropdwownWithKeyboard(e)}
          disabled={disabled}
          aria-labelledby="rfs-btn"
          aria-haspopup="listbox"
          aria-expanded={isDropdownOpen}
          data-testid="rfs-btn"
        >
          <span
            className={
              'block truncate text-center text-base pointer-events-none' +
              (isDropdownOpen ? ' hidden' : '')
            }
          >
            {validSelectedValue ? (
              <>
                <div
                  className="absolute inset-0 my-auto h-6 w-6 ml-2"
                  data-testid="rfs-selected-flag"
                >
                  {getSelectedFlag()}
                </div>
                {showSelectedLabel && (
                  <span className="font-medium">
                    {getLabel(validSelectedValue)}
                  </span>
                )}
              </>
            ) : (
              <>{placeholder || defaultPlaceholder}</>
            )}
          </span>
          {searchable && isDropdownOpen && (
            <input
              type="search"
              name="rfs-q"
              autoComplete="off"
              value={filterValue}
              placeholder={searchPlaceholder || defaultSearchPlaceholder}
              ref={filterTextRef}
              onChange={filterSearch}
              className={
                'w-full h-full border-none focus:outline-none focus:ring-0 p-0 leading-none text-base'
              }
              autoFocus={true}
            />
          )}
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
        </button>
      </span>
      {!disabled && isDropdownOpen && (
        <ul
          tabIndex={-1}
          role="listbox"
          ref={optionsRef}
          style={{ fontSize: optionsSize }}
          className="absolute right-0 left-0 py-2 overflow-y-auto max-h-48 border border-gray-300 z-10 shadow bg-white rounded-md mt-2"
        >
          {options.map((countryCode) => {
            const countryFlagName = countryCodeToPascalCase(countryCode);
            const CountryFlag = getFlag(countryFlagName as FlagKey);

            return (
              <li
                key={countryCode}
                id={`rfs-${countryCode}`}
                role="option"
                aria-selected={isDropdownOpen}
                tabIndex={0}
                className="w-full"
                onClick={() => {
                  onOptionSelect(countryCode);
                }}
                onKeyUp={(e) => onSelectWithKeyboard(e, countryCode)}
              >
                <span className="flex items-center hover:bg-gray-100 p-2">
                  <span className="">
                    <CountryFlag />
                  </span>
                  {showOptionLabel && (
                    <span className="ml-2">{getLabel(countryCode)}</span>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
