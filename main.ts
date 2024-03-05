import { ScryptedDeviceBase, ScryptedDeviceType, ScryptedInterface, ScryptedInterfaceProperty, Setting } from "@scrypted/sdk";
import ShellyDeviceProvider from "./ShellyDeviceProvider";

class ShellyPlugin extends ScryptedDeviceBase {
  shellyDevices: ShellyDeviceProvider[] = [];

  async discoverDevices(duration: number): Promise<void> {
    const discoveredDevices = [
      { id: "192.168.1.100", name: "Living Room Light" },
      { id: "192.168.1.101", name: "Bedroom Light" },
      { id: "192.168.1.102", name: "Kitchen Light" },
    ];

    discoveredDevices.forEach((device) => {
      const shellyDevice = new ShellyDeviceProvider(device.id);
      shellyDevice.name = device.name;
      this.shellyDevices.push(shellyDevice);
      this.onDeviceDiscovered(shellyDevice);
    });
  }

  async getSettings(): Promise<Setting[]> {
    return [
      {
        key: "discoveryDuration",
        name: "Discovery Duration",
        description: "Enter the duration (in seconds) for device discovery",
        type: "number",
        defaultValue: 30,
      },
    ];
  }
}

export default new ShellyPlugin();
