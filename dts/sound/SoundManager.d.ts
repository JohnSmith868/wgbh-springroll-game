/// <reference types="pixi-sound" />
import { SoundDescriptor } from "../assets/AssetManager";
/**
 * Manages Sound playback, pausing, resuming, and volume control
 */
export default class SoundManager {
    /** Context for managing SFX sounds */
    private sfx;
    /** Context for managing VO sounds */
    private vo;
    /** Context for managing music sounds */
    private music;
    /** Mapping of which SoundContexts each Sound belongs to, by ID */
    private soundMeta;
    /** Global volume of all SoundContexts */
    volume: number;
    /** Volume of all sounds in SFX context */
    sfxVolume: number;
    /** Volume of all sounds in VO context */
    voVolume: number;
    /** Volume of all sounds in Music context */
    musicVolume: number;
    /**
     * Add sound to a SoundManager Context
     * @param {Sound} sound Sound instance to add
     * @param {SoundDescriptor} descriptor Asset load metadata for Sound
     */
    addSound(sound: PIXI.sound.Sound, descriptor: SoundDescriptor): void;
    /**
     * Play sound by ID
     * @param {string} soundID ID of Sound to play
     * @param {PIXI.sound.CompleteCallback} [onComplete] Called when Sound is finished playing
     * @returns {PIXI.sound.IMediaInstance | Promise<PIXI.sound.IMediaInstance>} instace of playing sound (or promise of to-be-played sound if not preloaded)
     */
    play(soundID: string, onComplete?: PIXI.sound.CompleteCallback): PIXI.sound.IMediaInstance | Promise<PIXI.sound.IMediaInstance>;
    /** Retrieve reference to Sound instance by ID
     * @param {string} soundID ID of sound to retrieve
     * @returns {PIXI.sound.Sound} Sound instance
     */
    getSound(soundID: string): PIXI.sound.Sound;
    /**
     * Pause specified Sound by ID - if no ID provided, pause all sounds
     * @param {string} [soundID] ID of sound to pause - if undefined, pause all sounds
     */
    pause(soundID?: string): void;
    /**
     * Resume specified Sound by ID - if no ID provided, resume all sounds
     * @param {string} [soundID] ID of sound to resume - if undefined, resume all sounds
     */
    resume(soundID?: string): void;
    /**
     * Adjust volume of a specific sound by ID
     * @param {string} id ID of sound to set volume on
     * @param {number} volume Number 0-1 to set volume of specified sound
     */
    setVolume(id: string, volume: number): void;
    /**
     * Destroy sound, remove from context and PIXI Sound cache
     * @param id ID of sound to remove
     */
    removeSound(id: string): void;
}
