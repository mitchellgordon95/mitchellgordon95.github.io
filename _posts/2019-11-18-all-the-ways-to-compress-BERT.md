---
layout: post
title:  "All The Ways You Can Compress BERT"
categories: "machine learning"
---

Model compression reduces redundancy in a trained neural network. This is
useful, since BERT barely fits on a GPU (BERT-Large does not) and definitely
won't fit on your smart phone. Improved memory and inference speed efficiency
can also save costs at scale.

In this post I'll list and briefly taxonomize all the papers I've seen
compressing BERT. Don't see yours? Feel free to shoot me an
[email](mailto:mitchell.gordon95@gmail.com).

## Methods

__Pruning__ - Removes unnecessary parts of the network after training. This
includes weight magnitude pruning, attention head pruning, layers, and others.
Some methods also impose regularization during training to increase prunability
(layer dropout).

__Weight Factorization__ - Approximates parameter matrices by factorizing them
into a multiplication of two smaller matrices. This imposes a low-rank
constraint on the matrix. Weight factorization can be applied to both token
embeddings (which saves a lot of memory on disk) or parameters in feed-forward /
self-attention layers (for some speed improvements).

__Knowledge Distillation__ - Aka "Student Teacher." Trains a much smaller
Transformer from scratch on the pre-training / downstream-data. Normally this
would fail, but utilizing soft labels from a fully-sized model improves
optimization for unknown reasons. Some methods also distill BERT into different
architectures (LSTMS, etc.) which have faster inference times. Others dig deeper
into the teacher, looking not just at the output but at weight matrices and
hidden activations.

__Weight Sharing__ - Some weights in the model share the same value as other
parameters in the model. For example, ALBERT uses the same weight matrices for
every single layer of self-attention in BERT.

__Quantization__ - Truncates floating point numbers to only use a few bits
(which causes round-off error). The quantization values can also be learned
either during or after training.

__Pre-train vs. Downstream__ - Some methods only compress BERT w.r.t. certain
downstream tasks. Others compress BERT in a way that is task-agnostic.

## Papers

<a href="{{'/assets/bert_compression.bib' | absolute_url}}">Bibtex</a>

<style>
table {
font-size: 10px;
}
</style>

<table>


<tr>
  <th style="width: 300px"> Paper                                                                                                                               </th>
  <th> Prune </th> <th> Factor </th> <th> Distill </th> <th> W. Sharing </th> <th> Quant. </th> <th> Pre-train </th> <th> Downstream </th>
</tr>
<tr>
  <td> <a href="https://openreview.net/forum?id=SJlPOCEKvH">Compressing BERT: Studying the Effects of Weight Pruning on Transfer Learning</a>         </td>
  <td> &#x2611; </td> <td>               </td> <td>                        </td> <td>                </td> <td>              </td> <td> &#x2611;  </td> <td> &#x2611;   </td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1905.10650">Are Sixteen Heads Really Better than One?</a>                                                        </td>
  <td> &#x2611; </td> <td>               </td> <td>                        </td> <td>                </td> <td>              </td> <td>           </td> <td> &#x2611;   </td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1910.06360">Pruning a BERT-based Question Answering Model</a>                                                    </td>
  <td> &#x2611; </td> <td>               </td> <td>                        </td> <td>                </td> <td>              </td> <td>           </td> <td> &#x2611;   </td>
</tr>
<tr>
  <td> <a href="https://openreview.net/forum?id=SylO2yStDr">Reducing Transformer Depth on Demand with Structured Dropout</a>                          </td>
  <td> &#x2611; </td> <td>               </td> <td>                        </td> <td>                </td> <td>              </td> <td> &#x2611;  </td> <td>            </td>
</tr>
<tr>
  <td> <a href="https://openreview.net/forum?id=r1gBOxSFwr&noteId=r1gBOxSFwr">Reweighted Proximal Pruning for Large-Scale Language Representation</a> </td>
  <td> &#x2611; </td> <td>               </td> <td>                        </td> <td>                </td> <td>              </td> <td> &#x2611;  </td> <td>            </td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1910.04732">Structured Pruning of Large Language Models</a>                                                      </td>
  <td>          </td> <td> &#x2611;      </td> <td>                        </td> <td>                </td> <td>              </td> <td>           </td> <td> &#x2611;   </td>
</tr>
<tr>
  <td> <a href="https://openreview.net/forum?id=H1eA7AEtvS">ALBERT: A Lite BERT for Self-supervised Learning of Language Representations</a>          </td>
  <td>          </td> <td> &#x2611;      </td> <td>                        </td> <td> &#x2611;       </td> <td>              </td> <td> &#x2611;  </td> <td>            </td>
</tr>
<tr>
  <td> <a href="https://openreview.net/forum?id=S1x6ueSKPr">Extreme Language Model Compression with Optimal Subwords and Shared Projections</a>       </td>
  <td>          </td> <td>               </td> <td> &#x2611;               </td> <td>                </td> <td>              </td> <td> &#x2611;  </td> <td>            </td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1910.01108">DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter</a>                    </td>
  <td>          </td> <td>               </td> <td> &#x2611;               </td> <td>                </td> <td>              </td> <td> &#x2611;  </td> <td>            </td>
</tr>
<tr>
  <td> <a href="https://arxiv.org/abs/1903.12136">Distilling Task-Specific Knowledge from BERT into Simple Neural Networks</a>                 </td>
  <td>          </td> <td>               </td> <td> &#x2611;               </td> <td>                </td> <td>              </td> <td>           </td> <td> &#x2611;   </td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1910.01769">Distilling Transformers into Simple Neural Networks with Unlabeled Transfer Data</a>                 </td>
  <td>          </td> <td>               </td> <td> &#x2611;               </td> <td>                </td> <td>              </td> <td>           </td> <td> &#x2611;   </td>
</tr>
<tr>
  <td> <a href="https://arxiv.org/abs/1911.03588">Attentive Student Meets Multi-Task Teacher: Improved Knowledge Distillation for Pretrained Models</a>                 </td>
  <td>          </td> <td>               </td> <td> &#x2611;               </td> <td>                </td> <td>              </td> <td> Multi-task      </td> <td> &#x2611;   </td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1908.09355">Patient Knowledge Distillation for BERT Model Compression</a>                                        </td>
  <td>          </td> <td>               </td> <td> &#x2611;               </td> <td>                </td> <td>              </td> <td>           </td> <td> &#x2611;   </td>
</tr>
<tr>
  <td> <a href="https://openreview.net/forum?id=rJx0Q6EFPB">TinyBERT: Distilling BERT for Natural Language Understanding</a>                          </td>
  <td>          </td> <td>               </td> <td> &#x2611;               </td> <td>                </td> <td>              </td> <td> &#x2611;  </td> <td> &#x2611;   </td>
</tr>
<tr>
  <td> <a href="https://openreview.net/forum?id=SJxjVaNKwB">MobileBERT: Task-Agnostic Compression of BERT by Progressive Knowledge Transfer</a>       </td>
  <td>          </td> <td>               </td> <td> &#x2611;               </td> <td>                </td> <td>              </td> <td> &#x2611;  </td> <td>            </td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1910.06188">Q8BERT: Quantized 8Bit BERT</a>                                                                      </td>
  <td>          </td> <td>               </td> <td>                        </td> <td>                </td> <td> &#x2611;     </td> <td>           </td> <td> &#x2611;   </td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1909.05840">Q-BERT: Hessian Based Ultra Low Precision Quantization of BERT</a>                                   </td>
  <td>          </td> <td>               </td> <td>                        </td> <td>                </td> <td> &#x2611;     </td> <td>           </td> <td> &#x2611;   </td>
</tr>
</table>

## Comparison of Results

We're just going to do our best here, and report whatever the papers claim.
Mainly, we'll look at parameter reduction, inference speed-up[^3], and accuracy.[^1][^5]

[^3]: Note that not all compression methods make models faster. Unstructured pruning is notoriously difficult to speed-up via GPU parallelization. One of the papers claims that in Transformers, the computation time is dominated by the softmax computation, rather than matrix multiplication.

[^1]: It would be nice if we could come up with a single number to capture what
    we really care about. Like F1.

[^5]: Some of these percentages are measured against BERT-Large instead of
    BERT-Base, FYI.

If you're looking for practical winners, I would go with ALBERT, DistilBERT,
MobileBERT, Q-BERT, LayerDrop, RPP. You might be able to stack some of these
methods.[^4] But some of the pruning papers are more scientific than practical,
so maybe check out those, too.

[^4]: How different compression methods interact is an open research question.

<table>

<tr>
  <th style="width: 300px"> Paper                                                                                                                               </th>
  <th> Reduction </th> <th> Of </th> <th> Speed-up </th> <th> Accuracy? </th> <th> Comments </th>
</tr>
<tr>
  <td> <a href="https://openreview.net/forum?id=SJlPOCEKvH">Compressing BERT: Studying the Effects of Weight Pruning on Transfer Learning</a>         </td>
  <td> 30% </td> <td> params </td> <td> ? </td>  <td> Same </td> <td> Some interesting ablation experiments and fine-tuning analysis </td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1905.10650">Are Sixteen Heads Really Better than One?</a>                                                        </td>
  <td> 50-60% </td> <td> attn heads </td> <td> 1.2x </td> <td> Same </td> <td> </td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1910.06360">Pruning a BERT-based Question Answering Model</a>                                                    </td>
  <td> 50% </td> <td> attn Heads + FF </td> <td> 2x </td> <td> -1.5 F1 </td> <td> </td>
</tr>
<tr>
  <td> <a href="https://openreview.net/forum?id=SylO2yStDr">Reducing Transformer Depth on Demand with Structured Dropout</a>                          </td>
  <td> 50-75% </td> <td> layers </td> <td> ? </td> <td> Same </td> <td> </td>
</tr>
<tr>
  <td> <a href="https://openreview.net/forum?id=r1gBOxSFwr&noteId=r1gBOxSFwr">Reweighted Proximal Pruning for Large-Scale Language Representation</a> </td>
  <td> 40-80% </td> <td> params </td> <td> ? </td> <td> Same </td> <td> </td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1910.04732">Structured Pruning of Large Language Models</a>                                                      </td>
  <td> 35% </td> <td> params </td> <td> ? </td> <td> Same </td> <td> </td>
</tr>
<tr>
  <td> <a href="https://openreview.net/forum?id=H1eA7AEtvS">ALBERT: A Lite BERT for Self-supervised Learning of Language Representations</a>          </td>
  <td> 90-95% </td> <td> params </td> <td> 6-20x </td> <td> Worse </td> <td> Allows training larger models (BERT-xxlarge), so effectively 30% param reduction and 1.5x speedup with <b>better acc.</b> </td> 
</tr>
<tr>
  <td> <a href="https://openreview.net/forum?id=S1x6ueSKPr">Extreme Language Model Compression with Optimal Subwords and Shared Projections</a>       </td>
  <td> 80-98% </td> <td> params </td> <td> ? </td> <td> worse to much worse </td> <td> </td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1910.01108">DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter</a>                    </td>
  <td> 40% </td> <td> params </td> <td> 2.5x </td> <td> 97% </td> <td> &#x1f917; Huggingface </td>
</tr>
<tr>
  <td> <a href="https://arxiv.org/abs/1903.12136">Distilling Task-Specific Knowledge from BERT into Simple Neural Networks</a>                 </td>
  <td> 99% </td> <td> params </td> <td> 15x </td> <td> ELMO equiv. </td> <td> Distills into Bi-LSTMs </td>
</tr>
<tr>
  <td> <a href="https://arxiv.org/abs/1911.03588">Distilling Transformers into Simple Neural Networks with Unlabeled Transfer Data</a>                 </td>
  <td> 96% </td> <td> params </td> <td> ? </td> <td> ? </td> <td> Low-resource only </td>
</tr>
<tr>
  <td> <a href="https://arxiv.org/abs/1911.03588">Attentive Student Meets Multi-Task Teacher: Improved Knowledge Distillation for Pretrained Models</a>                 </td>
  <td> 90% </td> <td> params </td> <td> 14x </td> <td> better than Tang^ </td> <td> Distills into BiLSTMs. </td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1908.09355">Patient Knowledge Distillation for BERT Model Compression</a>                                        </td>
  <td> 50-75% </td> <td> layers </td> <td> 2-4x </td> <td> Worse </td> <td> But better than vanilla KD </td>
</tr>
<tr>
  <td> <a href="https://openreview.net/forum?id=rJx0Q6EFPB">TinyBERT: Distilling BERT for Natural Language Understanding</a>                          </td>
  <td> 87% </td> <td> params </td> <td> 9.4x </td> <td> 96% </td> <td> </td>
</tr>
<tr>
  <td> <a href="https://openreview.net/forum?id=SJxjVaNKwB">MobileBERT: Task-Agnostic Compression of BERT by Progressive Knowledge Transfer</a>       </td>
  <td> 77% </td> <td> params </td> <td> 4x </td> <td> competitive </td> <td> </td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1910.06188">Q8BERT: Quantized 8Bit BERT</a>                                                                      </td>
  <td> 75% </td> <td> bits </td> <td> ? </td> <td> negligible </td> <td> "Need hardware to show speed-ups" but I don't think anyone has it</td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1909.05840">Q-BERT: Hessian Based Ultra Low Precision Quantization of BERT</a>                                   </td>
  <td> 93% </td> <td> bits </td> <td> ? </td> <td> "at most 2.3% worse" </td> <td> ^ probably same </td>
</tr>
</table>



# Bonus Papers / Blog Posts

[Sparse Transformer: Concentrated Attention Through Explicit Selection](https://openreview.net/forum?id=Hye87grYDH)

[Lightweight and Efficient Neural Natural Language Processing with Quaternion
Networks](http://arxiv.org/abs/1906.04393)

[Adaptively Sparse Transformers](https://www.semanticscholar.org/paper/f6390beca54411b06f3bde424fb983a451789733)

[Compressing BERT for Faster Prediction](https://blog.rasa.com/compressing-bert-for-faster-prediction-2/amp/)

Update 11/19/19: Bibtex and bonus papers

Update 11/24/19: Added section with comparison of results

Update 11/25/19: Added "Attentive Student Meets..."
