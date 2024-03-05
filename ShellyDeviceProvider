import { ScryptedDeviceBase, ScryptedDeviceType, ScryptedInterface } from "@scrypted/sdk";

class ShellyDeviceProvider extends ScryptedDeviceBase implements ScryptedInterface {
  constructor(nativeId: string) {
    super(nativeId);
    this.name = `Shelly Switch ${nativeId}`;
    this.type = ScryptedDeviceType.Switch;
  }

  async getStatus(): Promise<any> {
    const response = await fetch(`http://${this.nativeId}/relay/0`);
    const data = await response.json();
    return {
      on: data.ison,
      power: data.power,
      energy: data.energy,
    };
  }

  async turnOn(): Promise<void> {
    await fetch(`http://${this.nativeId}/relay/0?turn=on`);
    this.onDeviceEvent(ScryptedInterface.Switch, {
      on: true,
    });
  }

  async turnOff(): Promise<void> {
    await fetch(`http://${this.nativeId}/relay/0?turn=off`);
    this.onDeviceEvent(ScryptedInterface.Switch, {
      on: false,
    });
  }
}

export default ShellyDeviceProvider;
