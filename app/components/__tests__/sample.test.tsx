import { render, cleanup } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom/extend-expect";
import type { Props } from "../Sample";
import { Sample } from "../Sample";

// テスト実行後にDOMをunmount,cleanupします。
afterEach(cleanup);

describe("Test Sample Component", () => {
	afterEach(() => {
		cleanup();
	});

	it("Snapshot Test", async () => {
		const props: Props = {
			text: "Sample"
		};
		const { asFragment } = render(<Sample {...props} />);
		expect(asFragment()).toMatchSnapshot();
	});
});
