package org.theoliverlear.communication.request;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SaladRequest {
    private int lettuceGrams;
    public SaladRequest(int lettuceGrams) {
        this.lettuceGrams = lettuceGrams;
    }
}
